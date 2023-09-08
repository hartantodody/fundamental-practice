# 🚀 BREAKWEEK PRATICE! 

Breakweek setelah Project Milestone ke-2 kali ini, aku mencoba untuk mengasah fundamental *logical thinking* lebih dalam lagi.


## 📝 AT HOME PRACTICE 
Ada 10 Soal At Home Practice yang dimana merupakan 8 Test Practice dan 2 Advanced Test Practice, yang diberikan saat kelas tamabahan kali ini. Berikut merupakan test practice dan jawabannya :

### 1. Write a function that takes in an array of numbers and returns the sum.
`Input: [1,2,3,4,5] Output: 15`

**Answer :**
1. ***START***
2. Input data array
3. Buat variable penampung data perhitungan (initial)
4. Buat for statement untuk mengakses inputan array dengan kondisi :
    -  i (var index) dimulai dari index 0 (pertama)
    -  i lebih kecil dari panjang array
    -  tambahkan nilai i (maju : 1,2,3, ... n)/increment
5. Tambahkan variabel initial dengan array dimulai dari index 0 s/d n (sampai iterasi habis)
6. Print value variable initial yang telah ditambahkan
7. ***END***

### 2. Given two strings as arguments to your function return true if they are the same or false otherwise.
`Input: kuda, KuDa Output: true`

**Answer :**
1. ***START***
2. Input kedua data string yang ingin dikomparasi
3. Jadikan kedua input lower case
4. Bandingkan kedua input dengan tanda `===`
5. Print hasil true atau false
6. ***END*** 

### 3. Create a function that will reverse any string passed into it
`Input:“hello” Output: “olleh”`

**Answer :**
1. ***START***
2. Input data string yang ingin di reverse
3. Pisahkan string tersebut menjadi huruf di dalam array
4. Balikkan urutan item di dalam arraynya
5. Gabungkan kembali menjadi kata
6. Print hasil
7. ***END*** 

### 4. Create a function that accepts three parameters (a number, b number , c number) and prints out all combinations of those.
`Input: 1, 2, 3 Ouput: [123, 132, 213, 231, 312, 321]`

**Answer :**
~~BELUM PAHAM TRANSLATE LOGIC KE CODENYA~~

### 5. Create a function that accepts 2 integers (a & b) and prints out all whole numbers between them including both endpoints but not including those numbers
`Input: 3, 8 Output: [4, 5, 6, 7]`

**Answer :**
1. ***START***
2. Input angka awal dan akhir
3. Buat variabel container array sebagai penampung hasil akhir
4. Buat for loop statement untuk membuat angka diantaranya dengan kondisi :
    -  i (var index) dimulai dari angka awal + 1 (karena kita ingin angkanya dimulai dari setelah angka awal)
    -  i lebih kecil dari angka akhir
    -  tambahkan nilai i (maju : 1,2,3, ... n)/increment
    *Pada dasarnya, kita ingin menambahkan + 1 dimulai dari angka awal dan berhenti menambahkan sebelum menyentuh angka akhir*
5. Masukkan data (n + 1) ke dalam var array
6. Jika i < nilai max, ulangi penambahan
6. Print hasil
7. ***END*** 

### 6. Create a function that accepts 0-n parameters and adds them together (or multiplies)
`Input: 5 Output: 15`
**Answer :**
1. ***START***
2. Input angka
3. Buat variabel inisial/start = 0
4. Tambahkan + 1 ke angka inputan
5. Looping
6. Tambahkan lagi angka inputan sebelumnya sampai iterasi habis (sesuai angka inputan)
7. Print hasil
8. ***END*** 


### 7. Create a function that checks whether all elements within an array are unique values
`Input: [1,2,2,4,5] Output: false`

**Answer :**
~~BELUM PAHAM TRANSLATE LOGIC KE CODENYA~~

### 8. Create a function that removes duplicates from an array
`Input: [1,2,2,3,4,5] Output: [1,2,3,4,5]`

**Answer :**
~~BELUM PAHAM TRANSLATE LOGIC KE CODENYA~~

## 📝 ADVANCED PRACTICE

### Write a pseudocode for this problem statement:

#### 1. Given a string, write code that returns true or false depending on whether it contains any vowels. Vowel characters are "a", "i", "u", "e", "o". The string might be a mix of capital letters.

Example:
```
Input: revou
Output: true

Input: cAt
Output: true

Input: bzzr
Output: false
```

**Answer :**
1. ***START***
2. Input data string
3. Ubah input ke lowercase
4. Buat variabel aiueo (lowercase)
5. Check input data ada huruf aiueo
6. Jika ada return true, jika tidak return false
7. Print hasil
8. ***END*** 

#### 2. Given an array of numbers. Please return the duplicates in another array, If there are no duplicates, return an empty string

Example:

`Input: [1,2,4,2,5,1] Output: [1,2]`

`Input: [2,5,7,3,5,8] Output: []`

**Answer :**
~~BELUM PAHAM TRANSLATE LOGIC KE CODENYA~~