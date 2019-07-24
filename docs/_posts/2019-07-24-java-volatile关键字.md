---
category: JAVA
tags:
  - JAVA
  - Volatile
  - Synchronized
  - Java内存模型
title: Java 内存模型 与 Volatile synchronized
date: '2019-07-24 09:36'
vssue-title:  Java 内存模型 Volatile 与 synchronized
#header-image: /assets/img/header-image-01.jpg
#top: null
---
在Java多线程编程中，volatile的作用，以及与synchronized的区别。  
java内存模型中的可见性，有序性，原子性。
<!-- more --> 
# Java内存模型 
Java 内存模型（JMM）规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存。 线程的工作内存中保存了该线程中用到的变量的主内存副本拷贝，线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存。 不同的线程之间也无法直接访问对方工作内存中的变量，线程间变量的传递均需要自己的工作内存和主存之间进行数据同步进行。 而 JMM 就作用于工作内存和主存之间数据同步过程。它规定了如何做数据同步以及什么时候做数据同步。  
## 可见性  
可见性就是线程之间的可将，一个线程的修改状态对另一个线程是可见的。  
在java中volatile，synchronized和final关键字可以实现可见性。  
## 原子性 
当一个操作不可分割，那么这个操作就是原子操作，比如a=0(非long和double) 而如果是a++;这个操作不是原子操作，因为分为a=a+1。  
一个操作中，CPU 不可以在中途暂停然后再调度，即不被中断操作，要不执行完成，要不就不执行。  
非原子操作都会存在线程安全问题，需要我们用同步技术来变成原子操作。  
在concurrent包中有一些原子类，如AtomicInteger,AtomicLong,AtomicReference等。  
## 有序性
Java内存模型允许编译器和处理器重新排序指令，但是无论重新排序，程序的执行结果都不能更改。  
使用volatile和synchronized来保证线程之间操作的有序性。volatile：禁止指令重排序，synchronized：一个变量在同一时刻只允许一条线程对其进行锁操作  
# volatile和synchronized的特点  
首先在java的线程安全中有两个概念：执行控制和内存可见。  

synchronized关键字解决的是执行控制的问题，它会阻止其它线程获取当前对象的监控锁，这样就使得当前对象中被synchronized关键字保护的代码块无法被其它线程访问，也就无法并发执行。更重要的是，synchronized还会创建一个内存屏障，内存屏障指令保证了所有CPU操作结果都会直接刷到主存中，从而保证了操作的内存可见性，同时也使得先获得这个锁的线程的所有操作，都happens-before于随后获得这个锁的线程的操作。  

volatile关键字解决的是内存可见性的问题，会使得所有对volatile变量的读写都会直接刷到主存，即保证了变量的可见性。这样就能满足一些对变量可见性有要求而对读取顺序没有要求的需求。  
:::tip
使用volatile关键字的条件：
1. 对变量的写入操作不依赖变量的当前值，或者你能确保只有单个线程更新变量的值。  
2. 该变量没有包含在具有其他变量的不变式中。  
:::
# volatile和synchronized的区别  
* volatile本质是在告诉jvm当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取； synchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。
* volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的
* volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性
* volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。
* volatile标记的变量不会被编译器优化；synchronized标记的变量可以被编译器优化
