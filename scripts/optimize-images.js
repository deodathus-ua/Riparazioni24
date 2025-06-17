const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../dist/images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
}

const optimizeImage = async (inputPath, outputPath, filename) => {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Create multiple optimized versions
        const optimizations = [
            // Original size with high compression
            {
                suffix: '',
                width: metadata.width,
                quality: 80,
            },
            // Mobile version (768px width)
            {
                suffix: '-mobile',
                width: 768,
                quality: 75,
            },
            // Tablet version (1024px width)
            {
                suffix: '-tablet',
                width: 1024,
                quality: 80,
            }
        ];

        for (const opt of optimizations) {
            const targetWidth = Math.min(opt.width, metadata.width);
            const outputFilename = filename.replace('.webp', `${opt.suffix}.webp`);
            const finalOutputPath = path.join(outputPath, outputFilename);

            await image
                .resize(targetWidth, null, {
                    withoutEnlargement: true,
                    fastShrinkOnLoad: true
                })
                .webp({
                    quality: opt.quality,
                    effort: 6,
                    smartSubsample: true
                })
                .toFile(finalOutputPath);

            console.log(`✓ Optimized: ${outputFilename}`);
        }
    } catch (error) {
        console.error(`Error optimizing ${filename}:`, error.message);
    }
};

const processDirectory = async (inputPath, outputPath) => {
    const items = fs.readdirSync(inputPath);

    for (const item of items) {
        const itemPath = path.join(inputPath, item);
        const itemOutputPath = path.join(outputPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            // Create subdirectory and process recursively
            if (!fs.existsSync(itemOutputPath)) {
                fs.mkdirSync(itemOutputPath, {recursive: true});
            }
            await processDirectory(itemPath, itemOutputPath);
        } else if (item.toLowerCase().endsWith('.webp')) {
            await optimizeImage(itemPath, outputPath, item);
        } else {
            // Copy non-webp files as-is
            fs.copyFileSync(itemPath, path.join(outputPath, item));
        }
    }
};

const main = async () => {
    console.log('🖼️  Starting image optimization...');
    try {
        await processDirectory(inputDir, outputDir);
        console.log('✅ Image optimization completed!');
    } catch (error) {
        console.error('❌ Image optimization failed:', error);
        process.exit(1);
    }
};

main();