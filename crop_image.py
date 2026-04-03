from PIL import Image

img = Image.open('src/assets/images/govtech-bob-cover.PNG')
width, height = img.size
print(f'Original: {width}x{height}')

if img.mode != 'RGB':
    img = img.convert('RGB')

# Find bounds of non-black content
top, bottom = 0, height
for y in range(height):
    if img.crop((0, y, width, y+1)).getextrema()[0] != (0, 0, 0):
        top = y
        break
for y in range(height-1, -1, -1):
    if img.crop((0, y, width, y+1)).getextrema()[0] != (0, 0, 0):
        bottom = y + 1
        break

cropped = img.crop((0, top, width, bottom))
cropped.save('src/assets/images/govtech-bob-cover.png')
print(f'Cropped to: {cropped.width}x{cropped.height}')
