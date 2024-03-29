# 算法

## 1.两个数组的交集(350)
给定两个数组，编写一个函数来计算它们的交集。

示例 1:
```
输入: nums1 = [1,2,2,1], nums2 = [2,2]

输出: [2,2]
```

示例 2:
```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]

输出: [4,9]
```

说明：
- 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
- 我们可以不考虑输出结果的顺序。

思路：设定两个为0的指针，比较两个指针的元素是否相等。如果指针的元素相等，我们将两个指针一起向后移动，并且将相等的元素放入空白数组。

```js
function fun1_1(nums1, nums2) {
  const obj = {}
  nums1.map(item => {
    if (!obj[item]) {
      obj[item] = 1
    } else {
      obj[item] += 1
    }
    return item
  })
  console.log('%c⧭', 'color: #00a3cc', obj);
  const res = []
  nums2.map(item2 => {
    if (obj[item2] && obj[item2] > 0) {
      obj[item2] -= 1
      res.push(item2)
    }
    return item2
  })
  return res
}
console.log('%c⧭', 'color: #00e600', fun1_1([1,2,2,1], [2,2]));
console.log('%c⧭', 'color: #00e600', fun1_1([4,9,5], [9,4,9,8,4]));
```
- 如果给定的数组已经排好序呢？将如何优化你的算法呢？
```js
function fun1_2(nums1, nums2) {
  nums1.sort()
  nums2.sort()
}
console.log('%c⧭', 'color: #00e600', fun1_2([1,2,2,1], [2,2]));
console.log('%c⧭', 'color: #00e600', fun1_2([4,9,5], [9,4,9,8,4]));
```

## 2.最长公共前缀(14)
编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，则返回""

示例 1:
```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:
```
输入: ["dog","racecar","car"]
输出: ""
```
然后我们只需要依次将基准元素和后面的元素进行比较（假定后面的元素依次为x1,x2,x3....），不断更新基准元素，直到基准元素和所有元素都满足最长公共前缀的条件，就可以得到最长公共前缀。

![](https://www.geekxh.com/assets/img/1.57270b1c.png)
```js
function fun2(strs) {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  let res = ''
  for (let i = 0; i < prefix.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      console.log('prefix[i] %c⧭', 'color: #00bf00', prefix[i]);
      console.log('strs[j][i] %c⧭', 'color: #00bf00', strs[j][i]);
      if (prefix[i] !== strs[j][i]) return res;
    }
    res += prefix[i]
  }
  return res
}

console.log('%c⧭', 'color: #733d00', fun2(["flower","flow","flight"]));
```

## 3.买卖股票的最佳时机(122)
![](https://www.geekxh.com/assets/img/1.d58fcd9b.jpg)
而且这一类型的题，面试时出现的频率非常的高。稍微改一改条件，就让我们防不胜防。那我们如何攻克这一类题型呢？我们从最简单的一道开始看起：

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。注意你不能在买入股票前卖出股票。

第122题：买卖股票的最佳时机 II
示例 1:
```
输入: [7,1,5,3,6,4]
输出: 7
```
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。

随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

## 4.旋转数组(189)

给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
```
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
```
```js
function fun4(arr, k) {
  return arr.slice(arr.length-k, arr.length).concat(arr.slice(0, arr.length-k))
}

console.log('%c⧭', 'color: #733d00', fun4([-1,-100,3,99], 6));
```

## 5.原地删除(27)

给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
示例 1:
```
给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。
```
```js
function fun5(arr, val) {
  return arr.filter(item => item !== val).length
}

console.log('%c⧭', 'color: #733d00', fun5([3,2,2,3], 3));
```

### 6.加一(66)

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
https://www.geekxh.com/0.01.%E6%8C%87%E5%AF%BC%E5%AD%A6%E4%B9%A0/022.html#_03%E3%80%81200%E9%81%93%E5%88%B7%E5%A4%9A%E4%B9%85

对于大部分人，建议是刷200道。大部分人指的是什么呢？我这里统指没有系统刷题经验的同学。

常见tag无外乎那么七八种，200道题听起来很多，但是分散到每一个tag，每种也就只包含二三十个。倘若我们算多点，每一个tag包含30道题，其中大概是15-20道easy，5-10道medium，2-3道hard。200道不多不少，基本可以完美覆盖整个算法体系，所以我认为200道是一个不错的数字。

那么回到问题 “刷完200道题可以掌握到什么程度？” 我当然可以给你一些信心，告诉你200道题可以让你吊打面试官，完虐BAT。但是呢，其实这都是骗小孩子的，或者就是骗 ¥。那真实的200道题能让你到达一个什么程度呢？

在算法方面超过大概80%的同行（这里单指基础算法，非ML、AI等）
在面试时不至于对方拿出一道题目整个人就陷入懵逼，而是有资格享受面试思考题目的过程
- 身边有朋友聊到算法敢过去和他们交流，而不是默默的走开
- 对于应届生，谋取一份拿到offer的可能性
- 对于老司机，去大厂镀金的必备条件
- 对于培训生，极大的缩小和科班学生的差距

跑步和刷题不同。跑步是越来越慢，刷题却是越来越快的。对于初学者（正常人），在每一个tag刷了10道左右简单题之后，基本同类型的题目可以提高到每天2-3道easy题目，有的掌握好的，甚至能提高到每天刷5-10题。很多同类型题目，基本都是一个模子刻出来的。

所以我认为，200道题刷的特别慢的话大概在150天左右完成，中不溜的在100天左右，刷的快的话在60天左右。同时，如果我们再把这里边的 medium 和 hard 通通remove 掉。再不济，也应该在3个月左右掌握大概100-150道简单题目。剩下的，just do it。

忘就对了。如果你在刷题的时候发现怎么也写不出来，别担心，这是正常的。如果你还发现，之前明明刷过的题，过段时间再做的时候，自己还是不会。别担心，这特么还是正常的。

所以如果有些题你刷了好多遍都还是不会，那就需要进行总结。思考到底是哪一环节卡住了你，反复进行练习。当然，这里有人建议是每道题都刷个3遍，其实我觉得倒是没有这个必要。我建议是找个小本本，记一下每一道的核心要素与考察要点。在刷题的这段时间里，没啥事就瞅瞅翻翻。

###
举例A 6在下4在上就等于6的全排列等于6减4的全排列，最后计算出结果等于360。

![](https://exp-picture.cdn.bcebos.com/9881b1fce186242f12cbe6ab35e434daf15ee80d.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)

C（n,m）,n在下m在上，是代表从n个元素里面任选m个元素进行组合。

![](https://exp-picture.cdn.bcebos.com/ff5c88d81819612062747eda70f202b374d7df0d.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_jpg%2Fquality%2Cq_80)