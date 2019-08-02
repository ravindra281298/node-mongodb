const MongoClient =require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017/';
const dbname ='test';
const doper=require('./operation');

MongoClient.connect(url,(err,client)=>{
    const db=client.db(dbname);
    assert.equal(err,null);
    console.log('connected correctly to server');
    doper.InsertDocument(db,{"name":"zoro","description":"swordman"},'newcol',(result)=>{
        console.log('Document Inserted: \n',result.ops);
    });
    doper.display(db,'newcol',(docs)=>{
        console.log('Collection Entry:\n',docs);
    });
    doper.remove(db,{"name":"zoro","description":"swordman"},'newcol',(result)=>{
        console.log("dropped One Entry:\n",result);
    });

    doper.display(db,'newcol',(docs)=>{
        console.log('Collection Entry:\n',docs);
    });
    // const collection =db.collection('newcol');
    // collection.insertOne({"name":"ravindra","description":8},(err,result)=>{
    //     assert.equal(err,null);
    //     console.log('inserted: '+ result.ops);  
    // });
    // collection.find({}).toArray((err,docs)=>{
    //     assert.equal(err,null);
    //     console.log('found\n');
    //     console.log(docs);
    // });

});