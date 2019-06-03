<template>
    <div>
      <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
</template>

<script>
  import areaList from '../../config/area.js'
    export default {
      name: "test",
      data() {
        return {
          addressInfo: {
            areaCode: '230000'
          },
          areaList: areaList,
          searchResult: []
        }
      },
      methods: {
        onSave() {
          alter('save');
        },
        onDelete() {
          alter('delete');
        },
        onChangeDetail(val) {
          if (val) {
            this.searchResult = [{
              name: '黄龙万科中心',
              address: '杭州市西湖区'
            }];
          } else {
            this.searchResult = [];
          }
        }
      }
    }
</script>

<style scoped>

</style>
