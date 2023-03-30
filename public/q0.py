# reading a string on a line
def read_string():
    read_input = input()
    print(read_input)
    
# reading a single integer on a line
def read_single_integer():
    read_integer_input = int(input())
    print(read_integer_input)
    
# reading multiple integers on a line
def read_multiple_integers():
    # suppose we read three integers:
    read_multiple_integers_input = input()
    read_multiple_integers_input = read_multiple_integers_input.split(" ")
    a = int(read_multiple_integers_input[0])
    b = int(read_multiple_integers_input[1])
    c = int(read_multiple_integers_input[2])
    print(a, b, c)

# reading multiple integers into an array
def read_integers_into_array():
    # first, read the length of the array
    # but we don't really need it in python
    n = int(input())
    # then read the array
    read_integers_into_array_input = input()
    read_integers_into_array_input = read_integers_into_array_input.split(" ")
    read_integers_into_array_input = [int(x) for x in read_integers_into_array_input]
    # print array space separated
    print(*read_integers_into_array_input)
    
# reading into a 2D array
def read_into_2D_array():
    # we are reading in an m x n array (m rows, n columns)
    # first we read in the dimensions of the array (m, n) on one line
    m, n = input().split(" ")
    m = int(m)
    n = int(n)
    # m = int(input())
    # n = int(input())
    # then we read in the array
    read_into_2D_array_input = []
    for i in range(m):
        new_row = input()
        new_row = new_row.split(" ")
        new_row = [int(x) for x in new_row]
        read_into_2D_array_input.append(new_row)
    for i in range(m):
        print(*read_into_2D_array_input[i])
    
# multitest
def read_multitest():
    # we have t test cases and in each test case we get 1 integer
    t = int(input())
    for i in range(t):
        read_multitest_input = int(input())
        print(read_multitest_input)



if __name__ == "__main__":
    print("1: read string \n \
        2: read single integer \n \
        3: Read multiple (3) integers \n \
        4: Read integers into array \n \
        5: read into 2D array \n \
        6: multitest")
    choice = int(input())
    match choice:
        case 1:
            read_string()
        case 2:
            read_single_integer()
        case 3:
            read_multiple_integers()
        case 4:
            read_integers_into_array()
        case 5:
            read_into_2D_array()
        case 6:
            read_multitest()