
class HashTable{
  constructor(size)
  {
    this.data=new Array(size)
  }

  //Generate a has value 
  _hash(key)
  {
    let hash=0;

    for(let i=0;i<key.length;i++)
    {
      hash=(hash+key.charCodeAt(i)*i) % this.data.length
    }
    return hash
  }

  //store key and value in the array
  set(key,value)
  {
    const address=this._hash(key)
    if(!this.data[address])
    {
      // if there is no item in this address space then create a new space
      this.data[address]=[]
    }
    //store the item in the space
    this.data[address].push([key,value])

    return this.data
  }

  //Retrieve the value according to the key
  get(key)
  {
    const address=this._hash(key)
    const bucket=this.data[address]

    if(bucket)
    {
      for(let i=0;i<bucket.length;i++)
      {
          if(bucket[i][0]===key)
          {
            return bucket[i][1]
          }
      }
    }
    return undefined
  }
}

const MyHash=new HashTable(50)
//Set the items in the hash table
MyHash.set('a',1002)
MyHash.set('b',1003)
MyHash.set('c',1004)
MyHash.set('d',1005)

//console.log(MyHash.get('b'))
//Simple function to bring out the first recurring number

function itemFirstRepeat(item)
{
  const map={}
  for(let i=0;i<item.length;i++)
  {
    if(map[item[i]]!==undefined)
    {
      return item[i]
    }else
    {
      map[item[i]]=i
    }
  }
  return map
}

itemFirstRepeat([1,3,1,4,2,3,4,5,5,6,7,8,34,5])
