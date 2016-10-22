<template>
	<header class="headbar" >
		<h1 id="title">{{title}}</h1>
		<div class="returnDiv" v-tap='onBack' ><a href="javascript:void(0)" v-tap='onBack' class="return-btn" id="return-btn" style="left:.33rem;"></a></div>
	</header>
</template>
<script>
	export default {
		props:{
			title:String,
			backUrl:String,
		},
		methods:{
			onBack(){
		if(this.backUrl){
			window.location.href = backUrl;
		}else{
			window.history.back();
		}

	},
	},
	}
</script>
<style>
	header.headbar {
		display: block;
		border-bottom: 1px #dadada solid;
		width: 100% !important;
		height: .8rem !important;
		line-height: .8rem !important;
		color: #00beaf !important;
		background: #fff !important;
		position: relative;
	}
	header.headbar a {

	}
	header.headbar a{


		margin-left:.33rem;
		margin-top:.2rem;
		background-repeat:no-repeat;
		font-size: 0.5rem;
		display: block;
		width:.3rem;
		height:.3rem;
		-moz-transform:rotate(-45deg);
		-webkit-transform:rotate(-45deg);
		-o-transform:rotate(-45deg);
		-ms-transform:rotate(-45deg);
		transform:rotate(-45deg);
		color:  #00beaf;
		border-left: 2px solid #00beaf;
		border-top: 2px solid #00beaf;

	}
	.returnDiv{
		position:absolute;
		top:0rem;
		height:100%;
		width:.8rem;
	}

</style>