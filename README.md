# @cxz/ckeditor
基于[ckeditor5](https://ckeditor.com/docs/ckeditor5/latest/index.html)，修改一些插件，增加一些插件。

## 一、新增的插件
### 1. ckeditor5-fullscreen（全屏插件）
配置
```js
{
    fullscreenConfig: {
        className: 'document-editor' // 修改需要全屏的元素类名
    },
}
```
### 2. ckeditor5-video（视频上传）

## 二、修改的插件
### 1. ckeditor5-paste-from-office
支持从wps粘贴文本


## 三、示例
packages\ckeditor5-build-decoupled-document\sample\index.html
