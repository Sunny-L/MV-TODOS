(function(exports){
    'usr strict'

    const  STORE_EKEY = 'goodsList';

    exports.storeService =  {
        fetch:function(){
            var localGoods = JSON.parse(localStorage.getItem(STORE_EKEY));
            var dataList = [];
            if(localGoods.length>0){
                for(let key in localGoods){
                    localGoods[key].isEdit = false;
                }
                dataList = localGoods;
            }else{
                $.ajax({
                    url:'/data/data.json',
                    dataType:'json',
                    async:false,
                    success:function(data){
                        for(let key in data){
                            data[key].isEdit = false;
                        }
                        dataList = data;
                    }
                })
            }
            return dataList;
        },
        save:function(goodsList){
            localStorage.setItem(STORE_EKEY,JSON.stringify(goodsList));
        }
    }
})(window)
