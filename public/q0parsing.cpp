// #include <bits/stdc++.h>
#include <iostream>


using namespace std;

// read a string on a line
void read_string() {
    string s;
    cin >> s;
    cout << s << "\n";
}

// reading a single integer on a line
void read_single_integer() {
    int n;
    cin >> n;
    cout << n << "\n";
}

// reading multiple integers on a line
void read_multiple_integers() {
    // in this example, we assume that we are reading 3 integers.
    int n1, n2, n3;
    cin >> n1 >> n2 >> n3;
    cout << n1 << " " << n2 << " " << n3 << "\n";
}

// reading multiple integers into an array
void read_integers_into_array() {
    // first, we'll read the length of the array
    int n;
    cin >> n;
    int arr[n];
    // now, we read each element of the array element by element
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    // now, we print the array space separated
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

// reading into a 2D array
void read_into_2D_array() {
    // we are reading in an m x n array (m rows, n columns)
    // first we read in the dimensions of the array (m, n) on one line
    int m, n;
    cin >> m >> n;
    int arr[m][n];
    // now, we read in the elements of the array row by row
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> arr[i][j];
        }
    }

    // now, we print the array row by row
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << arr[i][j] << " ";
        }
        cout << "\n";
    }
}

// multitest
void read_multitest() {
    // we have t test cases and in each test case we get 1 integer

    // first, we read the amount of test cases
    int t;
    cin >> t;
    while (t--) {
        // read each integer per test case, and do something with it
        int n;
        cin >> n;
        cout << n << "\n";
    }
}

int main() {
    // you do not have to worry about this.
    // this is just an "interactive" part of running the code
    // it allows you to test different parsers
    cout << "1: read string \n 2: read single integer \n3 : read multiple (3) integers \n 4: read integers into array \n5: read into 2D array \n 6: multitest" << "\n";
    int choice;
    cin >> choice;

    switch (choice) {
        case 1: {
            read_string();
            break;
        }
        case 2: {
            read_single_integer();
            break;
        }
        case 3: {
            read_multiple_integers();
            break;
        }
        case 4: {
            read_integers_into_array();
            break;
        }
        case 5: {
            read_into_2D_array();
            break;
        }
        case 6: {
            read_multitest();
            break;
        }
        default: {
            cout << "Invalid choice";
            break;
        }
    }
    
}
