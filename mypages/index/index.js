Page({
    data:{
        count: 0
    },
    countClick() {
        this.setData({
            count: this.data.count + 1
        })
    }
});