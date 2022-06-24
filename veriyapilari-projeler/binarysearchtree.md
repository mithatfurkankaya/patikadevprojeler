# Binary Search Tree Projesi
[7 5 1 8 3 6 0 9 4 2] dizisinin binary search tree aşamaları aşağıda gösterilmiştir.

```
                                        (5)
                                       /   \
                                      /     \
                                    (3)      (8)
                                   /  \      /  \
                                  /    \    /    \
                                (1)   (4)  (7)   (9)
                               /   \       /         
                              /     \     /         
                            (0)     (2)  (6)        
```
1. adım : Root 5 için solunda 3, sağında 8 bulunur.
2. adım : Parent 3 için solunda 1, sağında 4 bulunur.
3. adım : Parent 8 için solunda 7, sağında 9 bulunur.
4. adım : Parent 1 için solunda 0, sağında 2 bulunur.
5. adım : 4 son nodedir.
6. adım : Parent 7 için solunda 6 bulunur, sağı boştur.
7. adım : 9 son nodedir.
8. adım : 0 son nodedir.
9. adım : 2 son nodedir.
10. adım : 6 son nodedir.

