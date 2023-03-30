// #include <bits/stdc++.h>
#include <iostream>


using namespace std;

void read_string() {
    string s;
    cin >> s;
    cout << s << "\n";
}

void read_single_integer() {
    int n;
    cin >> n;
    cout << n << "\n";
}

void read_multiple_integers() {
    int n1, n2, n3;
    cin >> n1 >> n2 >> n3;
    cout << n1 << " " << n2 << " " << n3 << "\n";
}

void read_integers_into_array() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
}

void read_into_2D_array() {
    int m, n;
    cin >> m >> n;
    int arr[m][n];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> arr[i][j];
        }
    }
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << arr[i][j] << " ";
        }
        cout << "\n";
    }
}

void read_multitest() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        cout << n << "\n";
    }
}

int main() {
    // System.out.println("1: read string \n 2: read single integer \n" +  
                           // "3 : read multiple (3) integers \n 4: read integers into array \n" + 
                            // "5: read into 2D array \n 6: multitest");
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
