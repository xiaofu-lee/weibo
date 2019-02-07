$(".weiboList")
    .append(
        '<div class="weiboBox">'
        + '<div class="userInfoBox clearfix">'
        + '<div class="userInfo_sm">'
        + '<div class="userImg fl" title="' + headImg.name + '">'
        + '<a href="#"><img class="userImg"  src="' + headImg.url + '" alt="" /></a>'
        + '</div>'
        + '<div class="Info fl" title="' + user.nickName + '">'
        + '<h3 class="userTit">'
        + '<a href="#">' + user.nickName + '<img src="img/vipIcon2.png" alt="" /></a>'
        + '<img src="img/lv_big.png" alt="" />'
        + '</h3>'
        + '<p class="time">'
        + '<em>' + getWeiboTime(weibo.createDate) + '</em>'
        + '<em>来自</em>'
        + '<em>'
        + '<a href="#">微博weibo.com</a>'
        + '</em>'
        + '</p>'
        + '</div>'
        + '</div>'

        + '<div class="weiboText">'
        // 微博正文
        + '<div class="text_box">'
        // 标题
        + '<div class="title w_autocut">'
        + '<a target="_blank" href="#">' + weibo.title + '</a>'
        + '</div>'
        // 内容
        + '<div class="text text_cut s_txt2">'
        + weibo.content
        + '</div>'
        + '</div>'
        // 微博图片
        + '<div class="pic_mul">'
        + '<ul class="pic_m3 clearfix">'
        + '<li class="unlog_pic">'
        + '<img src="http://ww2.sinaimg.cn/crop.0.0.800.600.240/005M94J9jw1fccyt4pef0j30m80go40v.jpg" alt="" class="piccut_v piccut_h">'
        + '</li>'
        + '<li class="unlog_pic">'
        + '<img src="http://ww1.sinaimg.cn/crop.43.0.713.535.240/005M94J9jw1fccyt52d65j30m80evdhu.jpg" alt="" class="piccut_v piccut_h">'
        + '</li>'
        + '<li class="unlog_pic">'
        + '<img src="http://ww2.sinaimg.cn/crop.31.0.737.553.240/005M94J9jw1fccyt5t3f6j30m80fd40t.jpg" alt="" class="piccut_v piccut_h">'
        + '</li>'
        + '</ul>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<div class="weiboTool">'
        + '<ul>'
        + '<li>'
        + '<a href="javascript:collect(' + weibo.id + ')" class="collect iconNum">收藏</a>'
        + '</li>'
        + '<li>'
        + '<a href="javascript:transportNum(' + weibo.id + ')" class="transportNum iconNum">转发 ' + weibo.forwardingCount + '</a>'
        + '</li>'
        + '<li>'
        + '<a href="javascript:talkNum(' + weibo.id + ')" class="talkNum iconNum">评论 ' + weibo.commentsCount + '</a>'
        + '</li>'
        + '<li>'
        + '<a href="javascript:goodNum(' + weibo.id + ')" class="goodNum iconNum">赞 ' + weibo.likesCount + '</a>'
        + '</li>'
        + '</ul>'
        + '</div>'
        + '</div>');