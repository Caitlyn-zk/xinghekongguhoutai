let data = require('../controlor/data/data')
module.exports = {
    // 添加招聘信息
    addadvertise:async function(req,res){
        let section = req.body.section
        let name = req.body.name
        let place = req.body.place
        if(!section){
            res.json({
                status:541,
                message:'请确认招聘信息部门'
            })
            return false;
        }
        if(!name){
            res.json({
                status:542,
                message:'请确认招聘岗位'
            })
            return false;
        }
        if(!place){
            res.json({
                status:543,
                message:'请确认招聘地区'
            })
            return false;
        }

        let arr = [section,name,place]
        
        let result = await data.addadvertise(arr)
        if(result){
            res.json({
                status:200,
                message:'添加招聘信息成功'
            })
        }else{
            res.json({
                status:544,
                message:'添加招聘信息失败'
            })
        }

    },

    // 获取招聘信息
    getadvertise:async function(req,res){
        let result  =await data.getadvertise()
        if(result){
            res.json({
                status:200,
                data:result,
                message:'获得招聘信息成功'
            })
        }else{
            res.json({
                status:540,
                message:'获取招聘信息失败'
            })
        }
    },

    // 修改招聘信息
    updateadvertise:async function(req,res){
        let section = req.body.section
        let name = req.body.name
        let place = req.body.place
        let id = req.body.id
        if(!section){
            res.json({
                status:541,
                message:'请确认招聘信息部门'
            })
            return false;
        }
        if(!name){
            res.json({
                status:542,
                message:'请确认招聘岗位'
            })
            return false;
        }
        if(!place){
            res.json({
                status:543,
                message:'请确认招聘地区'
            })
            return false;
        }
        if(!id){
            res.json({
                status:544,
                message:'请确认招聘信息ID'
            })
        }
        let queryadvertise = await data.queryadvertise(id)    
        if(!queryadvertise){
            res.json({
                status:545,
                message:'该招聘不存在'
            })
        }else{
            let arr = [section,name,place,id]
            let result = await data.updateadvertise(arr)
            if(result){
                res.json({
                    status:200,
                    message:'修改招聘信息成功'
                })
            }else{
                res.json({
                    status:546,
                    message:'修改招聘信息失败'
                })
            }
        }
    },

    // 删除招聘信息
    deleteadvertise:async function(req,res){
        let id = req.body.id
        if(!id){
            res.json({
                status:547,
                message:'请确认删除招聘信息ID'
            })
            return false;
        }
        let queryadvertise = await data.queryadvertise(id)    
        if(!queryadvertise){
            res.json({
                status:545,
                message:'该招聘不存在'
            })
        }else{
            let result = await data.deleteadvertise(id)
            if(result){
                res.json({
                    status:200,
                    message:'删除招聘信息成功'
                })
            }else{
                res.json({
                    status:548,
                    message:'删除招聘信息失败'
                })
            }
        } 
    }

}