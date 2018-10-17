import Vue from 'vue'
import store from '../../store'


// 白大哥自定义vue拓展插件
class Bai{
    constructor(ui_new){ //ui_new为使用的ui框架实例  实例化时必须传入ui框架实例
        this.UI=ui_new   //赋值ui实例

        this.str="测试变量"
    }
    //时间格式化函数time_p 为传入的时间，时间戳，ishour为是否要时分秒，默认不要(true,false)
    time_format(time_p,ishour){
        let data=new Date(time_p)
        let new_data=data.toLocaleDateString().replace(/\//g, "-") + " " + data.toTimeString().substr(0, 8)
        let new_data_day=new_data.substring(0,new_data.indexOf(" "))
        return ishour?new_data:new_data_day
    }
    //时间转化成时间戳 传入时间时间，时间对象
    time_tamp(time){ 
        let data=new Date(time)
        let stamp=Number(data)
        return stamp
    }
    //判断数组是否有重复元素，传入一个一维数组
    arr_repeat(arr){
        let s_arr=[]
        let status=true
        let is_repeat=0
        arr.map((val,index)=>{
             is_repeat=0
             arr.map((v,i)=>{
                is_repeat=val==v?is_repeat+1:is_repeat
             })
             s_arr.push(is_repeat)
        })
        status=s_arr.reduce((f,val,index)=>{
            return f+val
        })>arr.length?true:false
        //返回一个对象，status表示是否重复，s_arr是一个数组，统计数组每一项出现的次数
        return {status,s_arr}
    }
    /*  数组数据模糊检索,有三个参数，*val,*arr, type
        val为需要模糊检索的值，arr为检索目标数组，当数组为对象时，type为键，
         */
    arr_search(val,arr,type){
        let new_arr=[]
            arr.map((v,i)=>{
                let data=""
                let is_obj=type==undefined?eval(`/${val}/`).test(v):eval(`/${val}/`).test(v[type])
                if(is_obj){
                    data=v
                    new_arr.push(data)
                }
            })
        return new_arr //返回一个新数组
    }
    //数组与对象深拷贝

    //封装ui框架插件
    test(){
        
    }
}
let a=new Bai()
// export default Bai
