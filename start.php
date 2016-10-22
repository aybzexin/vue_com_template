#!/usr/local/php/bin/php

<?php

class Start
{
    /**
     * 字符站位符,替换字符串
     */
    protected function interpolate($message, array $context = [])
    {
        $replace = [];
        foreach ($context as $key => $val) {
            $replace['{{' . $key . '}}'] = $val;
        }

        return strtr($message, $replace);
    }

    function run($traget, $replaces)
    {
        $this->copyTpls($traget);

        echo 'copy file done!' . PHP_EOL;

        foreach ($this->replaceTpls() as $file) {

            $tpl     = $traget . '/' . $file;
            $content = $this->interpolate(
                file_get_contents($tpl),
                $replaces
            );

            file_put_contents(
                str_replace('.tpl', '', $tpl),
                $content
            );

            unlink($tpl);
        }

        echo 'replace var done!' . PHP_EOL;
    }

    /**
     * @param $traget
     * @throws Exception
     */
    private function copyTpls($traget)
    {
        if (file_exists($traget)) {
            throw new Exception('目录已存在，禁止创建');
        }
        mkdir($traget);
        shell_exec('cp -rf tpls/* ' . $traget);
    }

    /**
     * @return array
     */
    private function replaceTpls()
    {
        return [
            '_rg/dev.yaml.tpl',
            '_rg/run.yaml.tpl',
        ];
    }
}

$replaces = [
    'ProjectName' => 'web_test',
    'APPKEY'      => 'OC_TEST',
    'Domain'      => 'test',
    'GitRemote'   => 'git@git.ayibang.cn:web_dev/web_test.git',
];
$traget   = __DIR__ . '/../web_test';
$start    = new Start();
$start->run($traget, $replaces);

echo 'finish path:' . $traget . PHP_EOL;
