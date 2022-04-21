# Merge Sort Projesi
[16 21 11 8 12 22] dizisini merge sort algoritmasına göre sıralarken gerçekleşecek aşamalar aşağıdaki görselde belirtilmiştir.

```
                                [16 21 11 8 12 22]
                                /                \
                           [16 21 11]          [8 12 22]
                           /        \          /       \
                       [16 21]     [11]     [8 12]     [22]
                        /  \         |      /    \       |
                    [16]   [21]    [11]   [8]   [12]    [22]
                        \  /         |       \  /        |
                       [16 21]     [11]     [8 12]      [22]
                              \    /              \    /
                            [11 16 21]           [8 12 22]
                                      \         /
                                  [8 11 12 16 21 22]
```
## Big-O Notation
Merge sort algoritmasında Big-O Gösterimi O(nlogn) şeklindedir. Bu durum bize input size ile çalışma süresi arasında logaritmik bir karakteristik olduğunu gösterir. 
  