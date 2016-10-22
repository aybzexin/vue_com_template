_env:
    - !R.env
        _name    : "_local_deploy"
        _res :
            - !R.project
                root : "${HOME}/devspace/{{ProjectName}}"
                name : "{{ProjectName}}"

    - !R.env
        _name    : "_safe_deploy"
        _res :
            - !R.project
                root : "/data/x/projects/{{ProjectName}}"
                name : "{{ProjectName}}"

    - !R.env
        _name    : "_online"
        _res     :
            - !R.vars
                ENV         : "online"
                BASE_DOMAIN : "ayibang.cn"
                UC_API_URL   : "http://uc.ayibang.cn/"
                UC_WEB_URL   : "http://uc.ayibang.cn/"
                ALLOW_IP     : "allow 100.64.0.0/10 ;allow 10.0.0.0/8 ; allow 220.181.127.214/32 ; allow 220.181.127.215/32 ; deny all ; "
                BASE_API_URL : "http://api.opera.base.ayibang.cn:8086/v1/"
                APP_API_URL  : "http://api.count.ayibang.cn:8086/v1/"
                GUARD_URL    : "http://guard.ayibang.cn"
                OPERA_URL    : "http://api.opera.base.ayibang.cn/v1/"
                APP_API_URL  : "http://api.intention.ayibang.cn/v1/"

    - !R.env
        _name    : "_demo"
        _res :
            - !R.vars
                ENV         : "demo"
                BASE_DOMAIN : "demo.ayibang.cn"
                UC_API_URL   : "http://uc.demo.ayibang.cn/"
                UC_WEB_URL   : "http://uc.demo.ayibang.cn/"
                ALLOW_IP     : "allow 100.64.0.0/10 ;allow 10.0.0.0/8 ; allow 220.181.127.214/32 ; allow 220.181.127.215/32 ; deny all ; "
                BASE_API_URL : "http://api.base.demo.ayibang.cn/v1/"
                APP_API_URL  : "http://api.intention.demo.ayibang.cn/v1/"
                OPERA_URL    : "http://api.opera.base.demo.ayibang.cn/v1/"
                GUARD_URL  : "http://guard.demo.ayibang.cn"

    - !R.env
        _name    : "_dev"
        _res :
            - !R.vars
                ENV          : "dev"
                BASE_DOMAIN  : "${USER}.dev.ayibang.cn"
                UC_API_URL   : "http://uc.demo.ayibang.cn/"
                UC_WEB_URL   : "http://uc.demo.ayibang.cn/"
                ALLOW_IP     : ""
                BASE_API_URL : "http://api.base.demo.ayibang.cn/v1/"
                GUARD_URL    : "http://guard.demo.ayibang.cn"
                OPERA_URL    : "http://api.opera.base.demo.ayibang.cn/v1/"
                APP_API_URL : "http://api.intention.zhangliang.dev.ayibang.cn/v1/"
    - !R.env
        _name    : "release"
        _res :
            - !R.vars
                OUTDIR         : "release"

    - !R.env
        _name : "base"
        _res :
            - !R.vars
                APPKEY : "{{APPKEY}}"
                OUTDIR : "debug"
            - !R.path
                dst   : "${PRJ_ROOT}/conf/used"

    - !R.env
        _name    : "dev"
        _mix     : "_dev,_local_deploy,base"

    - !R.env
        _name    : "demo"
        _mix     : "_demo,_safe_deploy,base"
    - !R.env
        _name    : "online"
        _mix     : "_online,_safe_deploy,base"
    - !R.env
        _name    : "lab_local"
        _mix     : "_lab,_local_deploy,base"

    - !R.env
        _name    : "demo_local"
        _mix     : "_demo,_local_deploy,base"

    - !R.env
        _name    : "online_local"
        _mix     : "_online,_local_deploy,base"

_sys:
    -  !R.system
        _name : "web"
        _res  :
            - !R.vars
                SOCK_FILE   : "${RUN_PATH}/fpm.sock"
                PHP_INCLUDE : "${PRJ_ROOT}/src"
                DOMAIN      : "{{Domain}}.${BASE_DOMAIN}"

            - !R.file_tpl
                tpl : "${PRJ_ROOT}/conf/options/config.json"
                dst : "${PRJ_ROOT}/conf/used/config.json"
            - !R.nginx_conf
                tpl :  "${PRJ_ROOT}/conf/options/ngx.conf"
                src :  "${PRJ_ROOT}/conf/used/ngx.conf"
                sudo :  true
