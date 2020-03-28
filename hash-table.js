
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
      this.data[address]=[]
    }
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

MyHash.set('a',1002)
MyHash.set('b',1003)
MyHash.set('c',1004)
MyHash.set('d',1005)

console.log(MyHash.get('b'))
