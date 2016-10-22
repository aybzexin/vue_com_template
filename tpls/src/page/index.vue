<template>
首页
</template>
<script>
	export default {
		ready(){
			Array.prototype.forEach = function (fn, context) {
				for (var k = 0, length = this.length; k < length; k++) {
					if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
						fn.call(context, this[k], k, this);
					}
				}
			};
		    [1,3,4,5,6].forEach(console.log);
		}
	}
</script>
