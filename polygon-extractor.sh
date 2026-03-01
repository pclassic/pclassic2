#!/usr/bin/env bash
set -euo pipefail

usage() {
    echo "Usage: $0 <polygon_zip> <contest_name>"
    echo "  polygon_zip    Path to the Polygon zip file containing problems"
    echo "  contest_name   Contest identifier (e.g. 2024s, 2025f)"
    echo ""
    echo "Example: $0 problems.zip 2024s"
    exit 1
}

if [[ $# -lt 2 ]]; then
    usage
fi

POLYGON_ZIP="$1"
CONTEST="$2"
TARGET_DIRECTORY="$(pwd)/public/solutions/PClassic${CONTEST}Solutions.zip"

mkdir -p "$(dirname "$TARGET_DIRECTORY")"

# Extract the polygon zip into a temporary directory
extract_dir=$(mktemp -d)
unzip -q "$POLYGON_ZIP" -d "$extract_dir"

temp_dir=$(mktemp -d)
for directory in $(ls "$extract_dir/problems"); do
    echo "Processing $directory"
    mkdir -p "$temp_dir/$directory"
    for file in $(ls "$extract_dir/problems/$directory/solutions"); do
        if [[ ($file == *.cpp || $file == *.py || $file == *.java) && $file != *brute* ]]; then
            cp "$extract_dir/problems/$directory/solutions/$file" "$temp_dir/$directory/"
        fi
    done
done

cd $temp_dir
zip -r "$TARGET_DIRECTORY" ./*
cd -
rm -rf "$temp_dir" "$extract_dir"