#!/bin/bash

# Проверка наличия параметра высоты
if [ -z "$1" ]; then
    echo "Ошибка: Необходимо указать высоту изображения."
    echo "Использование: $0 <высота>"
    exit 1
fi

# Проверка, является ли параметр числом
if ! [[ "$1" =~ ^[0-9]+$ ]]; then
    echo "Ошибка: Высота изображения должна быть целым числом."
    exit 1
fi

HEIGHT=$1
mkdir -p output

process_image() {
    local img="$1"
    local base=$(basename "$img")
    local filename="${base%.*}"
    local extension="${base##*.}"
    local dir=$(dirname "$img" | cut -d/ -f2-)
    mkdir -p "output/$dir"
    if [[ "$extension" =~ (jpe?g|JPE?G) ]]; then
        convert "$img" -resize x$HEIGHT -interlace Plane "output/$dir/${filename}_${HEIGHT}px_progressive.jpg"
    else
        convert "$img" -resize x$HEIGHT "output/$dir/${filename}_${HEIGHT}px.$extension"
    fi
}

# JPEG
find input -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' img; do
    process_image "$img"
done

# PNG
find input -type f -iname "*.png" -print0 | while IFS= read -r -d '' img; do
    process_image "$img"
done
