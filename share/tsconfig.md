// tsconfig.json 作用
1. 不带任何输入文件调用tsc 会先查找tsconfig.json文件，逐级向上搜索父目录
2. 带--project（或-p）指定一个包含tsconfig.json的目录
3. 指定文件的时候会忽略tsconfig.json
4. 配置
compilerOptions 编译器选项，可以被忽略有默认值
    基本设置
    检验配置选项
    附加检查
    模块检查
    SourceMap生成
    实验性配型
files和include是指定编译的目录和文件
exclude排除指定文件
extends继承的配置
compileOnSave IDE保存文件时根据tsconfig.json重新生成文件