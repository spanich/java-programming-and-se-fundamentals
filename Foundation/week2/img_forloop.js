var yellow = new SimpleImage(200,200);

for (var pixel of yellow.values()){
    pixel.setGreen(255);
    pixel.setBlue(0);
    pixel.setRed(255);
}

print(yellow);

for (var pixel of yellow.values()){
    pixel.setGreen(0);
    pixel.setBlue(255);
    pixel.setRed(255);
}

print(yellow);