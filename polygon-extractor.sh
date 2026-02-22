#!/usr/bin/env bash
set -euo pipefail

usage() {
    echo "Usage: $0 <problem_directory> <contest_name>"
    echo "  problem_directory  Path to the Polygon problem directory"
    echo "  contest_name       Contest identifier (e.g. 2024s, 2025f)"
    echo ""
    echo "Example: $0 problems 2024s"
    exit 1
}

if [[ $# -lt 2 ]]; then
    usage
fi

PROBLEM_DIRECTORY="$1"
CONTEST="$2"
TARGET_DIRECTORY="$(pwd)/public/solutions/PClassic${CONTEST}Solutions.zip"

mkdir -p "$(dirname "$TARGET_DIRECTORY")"

temp_dir=$(mktemp -d)
for directory in $(ls "$PROBLEM_DIRECTORY"); do
    echo "Processing $directory"
    mkdir -p "$temp_dir/$directory"
    for file in $(ls "$PROBLEM_DIRECTORY/$directory/solutions"); do
        if [[ ($file == *.cpp || $file == *.py || $file == *.java) && $file != *brute* ]]; then
            cp "$PROBLEM_DIRECTORY/$directory/solutions/$file" "$temp_dir/$directory/"
        fi
    done
done

cd $temp_dir
zip -r "$TARGET_DIRECTORY" ./*
cd -
rm -rf $temp_dir