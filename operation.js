const assert=require('assert');


exports.InsertDocument=(db,document,mycol,callback)=>{
    const coll=db.collection(mycol);
    coll.insertOne(document,(err,result)=>{
        assert.equal(err,null);
        console.log('inserted: '+result.result.n+'\n'+mycol);
        callback(result);
    });
};

exports.display=(db,mycol,callback)=>{
    const coll=db.collection(mycol);
    coll.find({}).toArray((err,docs)=>{
        assert.equal(err,null);
        callback(docs);
    });
};

exports.remove=(db,document,mycol,callback)=>{
    const coll=db.collection(mycol);
    coll.deleteOne(document,(err,result)=>{
        assert.equal(err,null);
        console.log('removed the document: ',document);
        callback(result);
    });
};