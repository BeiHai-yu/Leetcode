// 快排topK
// **快排+分治解法**

let findKthLargest = function(nums, k) {
    return quickSelect(nums, nums.length - k)
};

let quickSelect = (arr, k) => {
  return quick(arr, 0 , arr.length - 1, k)
}

let quick = (arr, left, right, k) => {
  let index
  if(left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if(k === index) {
        return arr[index]
    } else if(k < index) {
        // Top k 在左边
        return quick(arr, left, index-1, k)
    } else {
        // Top k 在右边
        return quick(arr, index+1, right, k)
    }
  }
  return arr[left]
}

let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor((right - left + 1)/2) + left],i = left,j = right
  // 开始调整
  while(i < j) {
    // 左指针右移
    while(arr[i] < datum) {
      i++
    }
    // 右指针左移
    while(arr[j] > datum) {
      j--
    }
    // 交换
    if(i < j) [arr[i], arr[j]] = [arr[j], arr[i]]
    // 当数组中存在重复数据时，即都为datum，但位置不同
    // 继续递增i，防止死循环
    if(arr[i] === arr[j] && i !== j) {
        i++
    }
  }
  return i
}

// 把前k个数建立一个小根堆，然后将数组后面k个一一与小根堆的堆顶进行比较，若大于堆顶，则交换，小根堆重新堆化，若小于，则继续比

function heapSort(array,k) {
    let arr = array.slice(0)
    function swap(arr,i,j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function heapify(arr, i, heapSize) {
        let min, l, r;
        while(true) {
            min = i;
            l = 2*i+1;
            r = 2*i+2;
            if(l<heapSize&&arr[min]>arr[l]) {
                min = l;
            }
            if(r<heapSize&&arr[min]>arr[r]) {
                min = r;
            }
            if(min === i) {
                break;
            }else {
                swap(arr,min,i);
                i = min;
            }
        }
    }
    // 建立一个小根堆
    function buildMaxHeap(arr) {
        let iparent = Math.floor(k/2)-1
        for(let i = (k>>1)-1; i>=0;i--) {
            heapify(arr,i,k)
        }
    }
   	function sort(arr) {
        buildMaxHeap(arr)
        for(let i=arr.length-1;i>=k;i--) {
            if(arr[i]>arr[0]) {
                swap(arr,0,i)
                heapify(arr,0,k)
            }
        }
        return arr[0]
    }
    return sort(arr)
}
let nums = [9,1,3,7,2]
console.log(heapSort(nums,2))
