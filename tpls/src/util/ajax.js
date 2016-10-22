
export default{

	ajax : function (param){

		var url = param.url;   //URL 必填
		var dataType = param.dataType || "json";    //传输格式  默认json
		var data = param.data;                      // 传输数据
		var type = param.type || "get";             // 请求方式  默认get
		var beforeSend = param.beforeSend;            //请求 头部信息  重写
		var afterSend = param.afterSend;              //默认带token之后带头部信息
		var success = param.success;                  //请求成功回调函数
		var afterSuccess = param.afterSuccess;            // 发送请求成功 判断错误之后重写
		var afterError = param.afterError;             // 请求失败，默认401 之后
		var beforeError  = param.beforeError;           //在401请求之后，重写
		var error = param.error;                      //重写error;
		var token = util.LocalStorage('token');        //获取token


		var async =  param.async || true;
		if(window.env.isConsoleAjax){
			console.log("************sendStart**********");
			console.log("SendUrl:");
			console.log(url);
			console.log("SendData:");
			console.log(data);
			console.log("**************");
		}
		$.ajax({
			url: url,//请求的url地址
			dataType: dataType,
			data : data,
			async : async,
			type : type,
			beforeSend: function(request) {
				if(typeof (beforeSend) === 'function'){
					beforeSend(request);
				}else{
					request.setRequestHeader("Authorization",token);
					typeof(afterSend) === 'function' && afterSend(request);
				}
			},
			success: function(result) {
				if(window.env.isConsoleAjax){
					console.log("***********AjaxSuccess********");
					console.log(result);
					console.log("*******************");

				}
				if(typeof (success) === 'function'){
					success(result);
				}else{
					if(result.error){
						$.dialog({
							content :result.error.message,
							time:1500
						});
					}else{
						typeof(afterSuccess) === 'function' && afterSuccess(result);
					}
				}

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				try{
					if(window.env.isConsoleAjax){
						if(XMLHttpRequest.responseText){
							var errorInfo = XMLHttpRequest.responseText;
							console.log("***********AjaxError********");
							console.log("errorMessage:");
							console.log(errorInfo);
							console.log("errorStatus:");
							console.log(XMLHttpRequest.status);
							console.log("errorUrl:");
							console.log(XMLHttpRequest.responseURL);
							if(util.isJson(XMLHttpRequest.responseText) &&  JSON.parse(XMLHttpRequest.responseText)){
								console.log("AjaxErrorMessage:"+JSON.parse(XMLHttpRequest.responseText).error.message);
							}
						}
						console.log(textStatus);
						console.log(errorThrown);
						console.log("******************************");


					}
					if(typeof (error) === 'function'){
						error(XMLHttpRequest,textStatus,errorThrown);
					} else{
						if(XMLHttpRequest.responseText && util.isJson(XMLHttpRequest.responseText) &&  JSON.parse(XMLHttpRequest.responseText).error ){
							var codes=JSON.parse(XMLHttpRequest.responseText).error.code;
							if(codes==401){
								var urlParam = {
									backUrl:window.location.href
								}
								window.location.href = util.localRouter("login",urlParam);
							}else{
								if(typeof beforeError ==="function"){
									beforeError(XMLHttpRequest,textStatus,errorThrown);
								}else{
									typeof(afterError) === 'function' && afterError(XMLHttpRequest, textStatus, errorThrown);
								}
							}
						}else {
							if(typeof beforeError ==="function"){
								beforeError(XMLHttpRequest,textStatus,errorThrown);
							}else{
								typeof(afterError) === 'function' && afterError(XMLHttpRequest, textStatus, errorThrown);
							}
						}

					}
				}catch(e){


				}

			}
		});
	}
}



