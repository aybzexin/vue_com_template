/**
 * Created by Administrator on 2016/9/18. 二十三种设计模式。策略模式
 */

var validator = {
	types:{},   //所有验证规则处理的类型存放的地方
	messages:[],//验证类型所对应的错误消息
	config:{},   //需要使用的验证类型


	validate:function(data){
		var i, msg, type, checker, result_ok;

		this.messages = [];    //清空所有错误信息

		for (i in data){
			if(data.hasOwnProperty(i)){
				type = this.config[i];
				checker = this.types[type];
				if(!type){
					continue;
				}
				if(!checker){
					throw{
						name : "ValidationError",
						message: "No handler to validate type" +type
					};
				}
			}
			result_ok = checker.validate(data[i]);
			if(result_ok){
				msg = "Invalid value for *"+i+"*,"+checker.content;
				this.messages.push(msg);
			}


		}
		return this.hasErrors();



	},
	hasErrors:function (){
		return this.messages.length !==0;
	}

};
function main(){
	validator.types.isNumber = {
		validate : function (value){
			return !isNaN(value);
		},
		content:"传入的值只能是合法的数字"
	};
	validator.types.isNonEmpty = {
		validate : function (value){
			return value !== "";
		},
		content:"传入的值不能为空"
	};
	validator.types.isAlphaNum = {
		validate: function (value){
			return !/[^a-z0-a]/i.test(value);
		},
		content:"传入的值只能是字母和数字,不能包含特殊字符"
	}

	validator.config = {
		first_name :'isNpnEmpty',
	};



}
