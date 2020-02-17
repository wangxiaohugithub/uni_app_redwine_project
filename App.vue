<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			plus.screen.lockOrientation('landscape-primary');
		},
		onShow: function() {
			console.log('App Show')
			if (window.innerWidth > 700) {
				if( window.location.hostname.indexOf('m.') == -1 ){
					if( window.location.hostname.indexOf('www.') == -1 ){
						window.location.href = window.location.protocol + '//www.' +  window.location.hostname;
					}
				}else{
					if( window.location.hostname.indexOf('www.') == -1 ){
						window.location.href = window.location.href.replace('m.','www.');
					}
				}
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
