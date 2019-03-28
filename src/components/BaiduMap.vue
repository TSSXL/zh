<template>
  <div class="map" id="allmap">

  </div>
</template>

<script>
    export default {
        name: "BaiduMap",
      mounted() {
        this.map()
      },
      methods:{
        map(){
          let allmap=document.getElementById("allmap")
          let map = new BMap.Map(allmap);
          let point = new BMap.Point(121.5738131228,29.8702378367);
          map.centerAndZoom(point, 14);
          map.enableScrollWheelZoom(true);   //点击显示公交路线
          map.enableDoubleClickZoom(true);
          map.setCurrentCity("宁波");          // 设置地图显示的城市 此项是必须设置的

          let  marker = new BMap.Marker(point);//添加标注点
          map.addOverlay(marker);

          //点击打开信息窗口
          var opts = {
            width : 200,     // 信息窗口宽度
            height: 60,     // 信息窗口高度
            title : "宁波仲恒房地产估价有限公司" , // 信息窗口标题
            enableMessage:true,//设置允许信息窗发送短息
          }
          var infoWindow = new BMap.InfoWindow("地址：宁波市鄞州区彩虹南路16号10楼C区", opts);  // 创建信息窗口对象
          marker.addEventListener("click", function(){
            map.openInfoWindow(infoWindow,point); //开启信息窗口
          });
        }
      }
    }
</script>

<style scoped>
</style>
