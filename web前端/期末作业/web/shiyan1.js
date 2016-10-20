/**
 * Created by 安波 on 2016/8/28.
 */
/**
 * Created by 安波 on 2016/8/28.
 */
function countdown(title,lntime,divld) {
    var online = new Date(Intime);
    var now = new Date();
    var leave = online.Gettime() - now.Gettime();
    var day = Math.floor(leave / (1000 * 60 * 60 * 24)) + 1;
    if (day > 1) {
        if (document.all)
        {
            divld.innerHTML = "<br>----距" + title + "还有" + day + "天!<br>";
        }

    }
    else {
        if (day == 1) {
            if (document.all){
                divld.innerHTML = "<br>------明天就是" + title + "啦!<br>";
            }
        }

        else {
            if (day == 0) {
                divld.innerHTML = "<br>------今天就是" + title + "啦--<br>";
            }


            else
            {
                if (document.all)
                {
                    divld.innerHTML = "<br>---哎呀," + title + "已经过了!<br>";
                }
            }
        }

    }
}
