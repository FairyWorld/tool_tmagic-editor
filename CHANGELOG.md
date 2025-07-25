# [1.6.0-beta.4](https://github.com/Tencent/tmagic-editor/compare/v1.6.0-beta.3...v1.6.0-beta.4) (2025-07-24)


### Bug Fixes

* **editor:** runtime url更新后恢复当前选中状态 ([c2830fc](https://github.com/Tencent/tmagic-editor/commit/c2830fca6b21648b51a486650caba3f9eb753c91))
* **editor:** 避免services plugin重复添加 ([cdb07df](https://github.com/Tencent/tmagic-editor/commit/cdb07dfaea13a1813caddd59ba7e8efbdb374b3c))



# [1.6.0-beta.3](https://github.com/Tencent/tmagic-editor/compare/v1.6.0-beta.2...v1.6.0-beta.3) (2025-07-24)


### Bug Fixes

* **editor:** runtimeUrl更新后需要重新设置runtime的dsl ([d31a544](https://github.com/Tencent/tmagic-editor/commit/d31a544a2312b4d78ae74eb600760df450946db8))
* **editor:** 修复代码块编辑器的更新内容后按下ctrl+s光标会偏移的问题 ([07b8f5f](https://github.com/Tencent/tmagic-editor/commit/07b8f5fe8303bad57490c7dd0eba00e435fbfad5))



# [1.6.0-beta.2](https://github.com/Tencent/tmagic-editor/compare/v1.6.0-beta.1...v1.6.0-beta.2) (2025-07-22)


### Features

* **core:** 异步加载dsl片段下，事件触发时node可能不存在 ([01b88db](https://github.com/Tencent/tmagic-editor/commit/01b88dba251a1f7cc29947c2a80e15839e50fcca))
* **utile:** replaceChildNode找不多目标不报错 ([2605011](https://github.com/Tencent/tmagic-editor/commit/2605011df481d9edba5503d2ee3b3c9d4b76d0a3))



# [1.6.0-beta.1](https://github.com/Tencent/tmagic-editor/compare/v1.6.0-beta.0...v1.6.0-beta.1) (2025-07-17)


### Bug Fixes

* **data-source:** 页面未初始化好之前，数据源数据变化后需要修改page.data ([305ea46](https://github.com/Tencent/tmagic-editor/commit/305ea4619fe15efbae069ef3f289c8742e8d51ee))
* **vue-components:** iterator-container 传递 page-fragment-contianer-id 参数 ([7799a5d](https://github.com/Tencent/tmagic-editor/commit/7799a5da618b0136f4b3c12315c69d21b27a5965))
* **vue-components:** page-fragment-container不标记为不是node节点 ([bf9fad1](https://github.com/Tencent/tmagic-editor/commit/bf9fad18b64521a9075a60f7e6e662b01d37f66f))


### Features

* **core:** Node中的instance初始为null，用于判断是否与组件产生关联 ([291de20](https://github.com/Tencent/tmagic-editor/commit/291de2005de54b8eeba818de67ab3506885f5057))
* **editor:** 页面片容器内的组件不允许选中 ([ded24c8](https://github.com/Tencent/tmagic-editor/commit/ded24c8b4ff2c203260ec7633fc85325c98a565c))
* **vue-components:** page-fragment-container编辑器中不去除内部组件id，不然会导致无法从app中获取dsl ([34bc223](https://github.com/Tencent/tmagic-editor/commit/34bc223f0241d9eef39450ebcef8a92b23c63f37))
* **vue-components:** 添加页面片容器id prop ([a43825c](https://github.com/Tencent/tmagic-editor/commit/a43825caa27695fcd85cc4b5351a00080fefcec0))



# [1.6.0-beta.0](https://github.com/Tencent/tmagic-editor/compare/v1.5.24...v1.6.0-beta.0) (2025-07-15)


### Bug Fixes

* **editor:** 依赖收集后没有同步到dsl中 ([aaf8046](https://github.com/Tencent/tmagic-editor/commit/aaf8046c63949ae733719409eb12109ef17b2cf1))


### Features

* **core,data-source,utils,react-runtime-help,vue-runtime-help:** 新增对页面片节点的管理 ([6a54720](https://github.com/Tencent/tmagic-editor/commit/6a547200681991ae8abefd0e3d72a603d21f12d4))



## [1.5.24](https://github.com/Tencent/tmagic-editor/compare/v1.5.23...v1.5.24) (2025-07-03)


### Bug Fixes

* **editor:** 初始化收集依赖后编译数据源不能使用源数据 ([84bf9ba](https://github.com/Tencent/tmagic-editor/commit/84bf9ba2f96829ba8e88b278bd49f2cb454605aa))



## [1.5.23](https://github.com/Tencent/tmagic-editor/compare/v1.5.22...v1.5.23) (2025-07-03)


### Bug Fixes

* **editor,react-runtime-help,vue-runtime-help:** 修复拖动页面顺序失效问题 ([b6a2604](https://github.com/Tencent/tmagic-editor/commit/b6a260471d9369e9b911f35d16ff0fca82a7d4fe))
* **editor:** 树组件搜索后不展开所有节点 ([c984c1a](https://github.com/Tencent/tmagic-editor/commit/c984c1a0cf0c934d41e5affb471d2ff2efa4bb97))
* **editor:** 防止快捷键重复注册 ([18e8df4](https://github.com/Tencent/tmagic-editor/commit/18e8df4a557cb845a8f1d2868ea4e8833a75941d))
* **editor:** 页面列表滚动条 ([727af10](https://github.com/Tencent/tmagic-editor/commit/727af1058d23e0843482536133954243c9f208d5))


### Features

* **core,data-source,dep,editor,schema:** 新增组件禁用代码块/数据源的配置开关 ([2f4a7a3](https://github.com/Tencent/tmagic-editor/commit/2f4a7a33b85015bfe5368bd10bf562514f07299c))
* **dep,schema:** 添加组件没用数据源或者代码块的配置key ([3f7d039](https://github.com/Tencent/tmagic-editor/commit/3f7d03959cdbafacc439df2bf3a61aa1e21cb8c2))
* **editor:** service新增removePlugin方法 ([8d6da37](https://github.com/Tencent/tmagic-editor/commit/8d6da3712efdc269cbaa47b003bf667bbce00ae7))
* **editor:** stage overlay 支持放大缩小 ([3268196](https://github.com/Tencent/tmagic-editor/commit/32681964b340fc8e68f8b6a6eb420043fd569b78))
* **editor:** 数据源属性/方法表格可以拖动列宽 ([222a96e](https://github.com/Tencent/tmagic-editor/commit/222a96e4652003b908c5c75378e5ddf2029fdd65))
* **editor:** 新增props-panel-unmounted事件 ([9e590c5](https://github.com/Tencent/tmagic-editor/commit/9e590c5cf73c9925f7aad562409f31c1ff273b18))
* **playground:** 新增按比例拖动组件大小快捷键 ([b78ef20](https://github.com/Tencent/tmagic-editor/commit/b78ef206022d69a8c3f81c55a301e5a4b5147641))
* **stage:** 新增禁用标尺配置 ([95d6263](https://github.com/Tencent/tmagic-editor/commit/95d6263f42ad13c2ac0560704695408634e55d91))
* **stage:** 添加updateMoveableOptions api，用于更新选中框状态 ([bdd59cf](https://github.com/Tencent/tmagic-editor/commit/bdd59cff9b378461f905b04e250f8ad7f6ed21a0))



## [1.5.22](https://github.com/Tencent/tmagic-editor/compare/v1.5.21...v1.5.22) (2025-06-09)


### Bug Fixes

* **data-source,utils:** 不使用replaceAll,安卓10不支持 ([b1f020d](https://github.com/Tencent/tmagic-editor/commit/b1f020d53242981751c4e941a0fde9d61e9d6060))
* **vue-runtime-help:** 修复页面片中组件拖动位置异常问题 ([b72f4da](https://github.com/Tencent/tmagic-editor/commit/b72f4dae28961fd8246101998a2f4e78775dd996))


### Features

* **design:** dialog支持配置destroyOnClose ([cd4656e](https://github.com/Tencent/tmagic-editor/commit/cd4656e54f3627429427973525b9fc5bf10a7139))
* **editor:** 支持禁用数据源与代码块 ([6152a78](https://github.com/Tencent/tmagic-editor/commit/6152a78467b9fc96760da3b9a2bd4cc8cb8457b8))
* **editor:** 支持配置自定义创建Monaco editor函数 ([3097e8e](https://github.com/Tencent/tmagic-editor/commit/3097e8eddb61331cc249d1b18d74560bc8bfbefe))
* **editor:** 样式中的position选项加上中文 ([1614b62](https://github.com/Tencent/tmagic-editor/commit/1614b62d2a2bea8393386538ac57f0909bb06032))
* **eslint-conft:** 添加import-sort的本地目录 ([e01ce21](https://github.com/Tencent/tmagic-editor/commit/e01ce2128e98b512b3c3611615da4f97b1b9d356))
* **form,form-schema:** group list支持配置默认展开数量 ([6b4ca4b](https://github.com/Tencent/tmagic-editor/commit/6b4ca4b83a1a0a36ff94c30feb1845d957377b47))



## [1.5.21](https://github.com/Tencent/tmagic-editor/compare/v1.5.20...v1.5.21) (2025-06-04)


### Bug Fixes

* **data-source:** 没有异步加载数据源的情况下，数据源init方法没有执行 ([c7b2734](https://github.com/Tencent/tmagic-editor/commit/c7b27340901c9728195084ca88525b9102fc4855))


### Features

* **editor,stage:** 支持切换runtimeUrl ([92534fc](https://github.com/Tencent/tmagic-editor/commit/92534fc9159b408f93e194ce119b45ff5cd5f95f))
* **editor:** 获取联动组件的方法函数中添加组件id参数 ([0196eb3](https://github.com/Tencent/tmagic-editor/commit/0196eb343ac782ca2ab7a9a69f09ab273a38fa8e))
* **form:** select before/after request配置函数支持异步 ([8142a7a](https://github.com/Tencent/tmagic-editor/commit/8142a7ab6da9503540070b443b24e3344a069858))



## [1.5.20](https://github.com/Tencent/tmagic-editor/compare/v1.5.19...v1.5.20) (2025-05-21)


### Bug Fixes

* **editor:** getTMagicApp中对runtime-ready可能存在多次事件监听 ([4448584](https://github.com/Tencent/tmagic-editor/commit/444858491da47c168ea2540cd718fabdca027781))
* **editor:** 新增数据源时，由于方法列表为空出现的报错 ([1e396d4](https://github.com/Tencent/tmagic-editor/commit/1e396d4a8d202c0324d7f4128b80fd476bdb4e65))


### Features

* **core:** 新增事件处理前后的钩子函数配置 ([b78d2fd](https://github.com/Tencent/tmagic-editor/commit/b78d2fda1fe474b7004db038a51773c326b24f4e))
* **data-source:** 新增判断所有数据源加载完成的方法 ([dc37d4e](https://github.com/Tencent/tmagic-editor/commit/dc37d4e8bd35d473c3c74a7b10b3d9e6af00d759))
* **data-source:** 由于存在异步加载数据源，新增所有数据源加载完毕事件 ([a35789c](https://github.com/Tencent/tmagic-editor/commit/a35789c0cf1c740df9fb16bc302cf1aec50cdf2b))



## [1.5.19](https://github.com/Tencent/tmagic-editor/compare/v1.5.18...v1.5.19) (2025-05-20)


### Bug Fixes

* **data-source:** 异步加载数据源时，初始化第一次编译时数据源可能未加载，需要优先设置数据源默认值 ([d628ffa](https://github.com/Tencent/tmagic-editor/commit/d628ffad26f897ee6144b3981bdcd11cb8dd5e9d))
* **data-source:** 异步加载数据源时，初始化第一次编译时数据源可能未加载，需要优先设置数据源默认值 ([fc88671](https://github.com/Tencent/tmagic-editor/commit/fc886715c7b465d7f5e18eb5bcd904963f6dd4a9))
* **editor:** 由于数据源可能有内部方法，所以去掉事件联动中数据源选项置灰的逻辑 ([1444eb6](https://github.com/Tencent/tmagic-editor/commit/1444eb6ae7455dc9abaf3d05ed8db02b410875e7))


### Features

* **core:** 支持统一设置node.store的初始值 ([abe27db](https://github.com/Tencent/tmagic-editor/commit/abe27db47afbedf997affcd9593c9a9e8e0a4a14))



## [1.5.18](https://github.com/Tencent/tmagic-editor/compare/v1.5.17...v1.5.18) (2025-05-14)


### Bug Fixes

* **editor:** 根节点修改在update事件中不要触发依赖收集 ([6b481c4](https://github.com/Tencent/tmagic-editor/commit/6b481c447309abefbf9ea12f80fa4f874c7ff2a0))
* **editor:** 选中组件时，如果组件处于所在容器可视范围外，不要将组件滚动至可视范围，而是滚动组件容器至可视范围 ([936eb08](https://github.com/Tencent/tmagic-editor/commit/936eb08a94ef8e237f55d2c9c7f0408f9bfb4f8e))


### Features

* **core:** 新增数据源初始数据配置字段 ([d1e99a4](https://github.com/Tencent/tmagic-editor/commit/d1e99a46a7a25e2ddef152aef634589361e39194))
* **editor:** eventsServic支持插件扩展 ([054d126](https://github.com/Tencent/tmagic-editor/commit/054d12601b243a02f54af5f8776d74b5c5497858))
* **editor:** 组件高级配置中添加display ([e0d5efb](https://github.com/Tencent/tmagic-editor/commit/e0d5efb02261069b48823cd8ce24232ea6f24b08))



## [1.5.17](https://github.com/Tencent/tmagic-editor/compare/v1.5.16...v1.5.17) (2025-05-06)


### Features

* **cli:** 指定组件不使用动态加载，dynamicImport为true时有效 ([85284e5](https://github.com/Tencent/tmagic-editor/commit/85284e54f5874d2c7afe08e401b26ae6b21a153f))
* **editor,form,form-schema:** 新增form-schema，将表单schema放入其中 ([50b74d1](https://github.com/Tencent/tmagic-editor/commit/50b74d10e6e52f14ac46547292eaba8fe9bbae11))
* **editor:** dsl初始化时收集依赖使用worker ([179b797](https://github.com/Tencent/tmagic-editor/commit/179b797c5c8b4cbcf76a1d32ec3e899efb32ae2a))
* **form:** select before/after request函数配置中增加prop字段 ([ed01cfc](https://github.com/Tencent/tmagic-editor/commit/ed01cfca870c726117c33478907f55d9fe66085b))



## [1.5.16](https://github.com/Tencent/tmagic-editor/compare/v1.5.15...v1.5.16) (2025-04-28)


### Bug Fixes

* **data-source:** 异步加载数据源后，数据源未初始化 ([378c756](https://github.com/Tencent/tmagic-editor/commit/378c75658d1b50454ceb8cf4072b09beffb86067))


### Features

* **core:** instance设定不再限制只有方法 ([e5bcd76](https://github.com/Tencent/tmagic-editor/commit/e5bcd762b290a6b58bfd6486628c828207e30c37))
* **core:** 添加error hander配置 ([6dc0073](https://github.com/Tencent/tmagic-editor/commit/6dc007388bb28e6501bcb026fce1e2881b87bd82))
* **editor:** 组件默认的名称，id配置只要在业务不提供时才加入 ([2dc0bbc](https://github.com/Tencent/tmagic-editor/commit/2dc0bbc679a7ab1ee1b7d368973bcb4abed2c0bb))



## [1.5.15](https://github.com/Tencent/tmagic-editor/compare/v1.5.14...v1.5.15) (2025-04-25)


### Bug Fixes

* **editor:** getTMagicApp返回类型错误 ([ba05ecb](https://github.com/Tencent/tmagic-editor/commit/ba05ecbf608785d97c60adbdd6b7381597e6cb6f))



## [1.5.14](https://github.com/Tencent/tmagic-editor/compare/v1.5.13...v1.5.14) (2025-04-24)


### Bug Fixes

* **dep:** 配置了数据源内部方法无法收集到依赖 ([0e91133](https://github.com/Tencent/tmagic-editor/commit/0e911337b8f88e5e88fecf072395c38d2de1bc08))
* **editor:** 编辑数据源/代码块时，列表高亮 ([de52ff4](https://github.com/Tencent/tmagic-editor/commit/de52ff4fe100cb11b73865703b03a0cbcc4e92e7))


### Features

* **form:** onChange添加setModel参数，用于修改model并添加至修改记录中 ([5e0e776](https://github.com/Tencent/tmagic-editor/commit/5e0e776d4004c9a4ad2ae53d7146353dc088a478))
* **utils:** 添加设置删除获取url参数的方法 ([105de9d](https://github.com/Tencent/tmagic-editor/commit/105de9d2c6ba69eb9e7ca9777f16441e5aa4c1f0))
* **vue-runtime-help:** app不存在时抛异常，保证app一定存在，避免多余的可选链 ([fd7e737](https://github.com/Tencent/tmagic-editor/commit/fd7e737e8c4f4958c8d59d5f844f40cf1509724f))



## [1.5.13](https://github.com/Tencent/tmagic-editor/compare/v1.5.12...v1.5.13) (2025-04-10)


### Bug Fixes

* **data-source:** 数据源初始化时机比注册早回出现死循环 ([840c2c3](https://github.com/Tencent/tmagic-editor/commit/840c2c3c7d267f999e229f7720cbbdc1bf5e2436))
* 修复表格拖拽排序与表单选字操作冲突的问题 ([f91eb41](https://github.com/Tencent/tmagic-editor/commit/f91eb415dbdf23c8f05bc21617de67aef7bd524c))


### Features

* **core:** 支持传入env ([0bcd7d0](https://github.com/Tencent/tmagic-editor/commit/0bcd7d075518523809b639e8128583c87b90aa89))
* **core:** 支持自定义Node类 ([18524d8](https://github.com/Tencent/tmagic-editor/commit/18524d89fb8086a34307ed17e54da520db92add2))
* **editor:** 编辑代码块/数据源时高亮列表中对应的项 ([54e00f2](https://github.com/Tencent/tmagic-editor/commit/54e00f28524e546cecd0691d19fbcb0bee4af35e))



## [1.5.12](https://github.com/Tencent/tmagic-editor/compare/v1.5.11...v1.5.12) (2025-03-27)


### Bug Fixes

* **design:** card没有slots时隐藏对应slot ([4ddc55a](https://github.com/Tencent/tmagic-editor/commit/4ddc55aa6de4bafb978a621ab9b69af1e0c36d78))
* **editor:** 数据源修改后，依赖重新收集不准确 ([9c7d711](https://github.com/Tencent/tmagic-editor/commit/9c7d711c167c5e8ee1e9d8a8e89d66d245070dee))
* **editor:** 获取关联组件的方法默认值 ([f5742c1](https://github.com/Tencent/tmagic-editor/commit/f5742c107a68389c0828de991e7f5e9745e20d67))
* **vue-components:** button删除调试代码，text支持富文本 ([2a714ae](https://github.com/Tencent/tmagic-editor/commit/2a714ae9cc89b7c88528c8afe9270ad774d7755d))


### Features

* **cli:** 如果识别不要组件文件，则默认从npm包的default导入 ([b715a87](https://github.com/Tencent/tmagic-editor/commit/b715a87f409856ed396b3e35eb4102776329531e))



## [1.5.11](https://github.com/Tencent/tmagic-editor/compare/v1.5.10...v1.5.11) (2025-03-11)


### Bug Fixes

* **dep:** 依赖收集不能过滤id/name ([0c207c7](https://github.com/Tencent/tmagic-editor/commit/0c207c7b834ae25c16038a8ca431154afb4ccda1))
* **dep:** 数据源方法收集判断 ([72108e0](https://github.com/Tencent/tmagic-editor/commit/72108e00193698c8e7087b115f36e10216a0f386))


### Features

* **vue-runtime-help:** useDsl/useEditorDsl添加app默认参数 ([f671c67](https://github.com/Tencent/tmagic-editor/commit/f671c670db84631abb1f7d9e4fbf432637de2947))



## [1.5.10](https://github.com/Tencent/tmagic-editor/compare/v1.5.9...v1.5.10) (2025-03-07)


### Bug Fixes

* **data-source:** 处理异步动态加载数据源时，初始化数据源还未加载完毕的情况 ([3c66319](https://github.com/Tencent/tmagic-editor/commit/3c66319b03c42305c66b0c6a87307fe747d9f90e))
* **editor:** 样式配置宽度不能为负 ([775fcf5](https://github.com/Tencent/tmagic-editor/commit/775fcf5693eef051e5899aceae7873c1afa0e60c))
* **stage:** 防止runtime重复注册 ([63fe6ec](https://github.com/Tencent/tmagic-editor/commit/63fe6ec68be444082cb16aac76d6b2fe9ee5724f))


### Features

* **core:**  hook函数调用添加node参数 ([5ba2a73](https://github.com/Tencent/tmagic-editor/commit/5ba2a73c7035d84688be0b0f1c0b4467558518c3))
* **core, editor:** 删除公共的点击事件实现，由组件自行添加 ([c8e1cff](https://github.com/Tencent/tmagic-editor/commit/c8e1cffca9b12c124c34d75ee9187a03c6f61599))
* **core:** app添加dsl-change事件 ([a4d021d](https://github.com/Tencent/tmagic-editor/commit/a4d021d2fb1fec113496733380d99e0f9deb132f))
* **core:** node新增registerMethod方法，用于组件注册供其他组件通过事件配置调用 ([ff07147](https://github.com/Tencent/tmagic-editor/commit/ff0714727044c41148babcec977ca89058169501))
* **reate-runtime-help,vue-runtime-help:** 新增组件状态hook ([6f5bb84](https://github.com/Tencent/tmagic-editor/commit/6f5bb84c04f9b4b5b2145ce6c559445563a60e6c))
* **runtime:** vue2 h传参与vue3不一样，需要自定义render ([90abde5](https://github.com/Tencent/tmagic-editor/commit/90abde57cc01218b483c94faf29f88996fb75c20))
* **runtime:** 支持页面切换 ([4026c0c](https://github.com/Tencent/tmagic-editor/commit/4026c0c305937b060de21ec74355a1be46e25dbf))
* **vue-components,react-components:** 增加点击事件，使用组件状态hook ([0736646](https://github.com/Tencent/tmagic-editor/commit/0736646c63067b3b19125b356f462d658673eaa7))
* **vue-container:** 支持自定义render ([91cde30](https://github.com/Tencent/tmagic-editor/commit/91cde30d75de866ade3f48f48b2c0d1251fe2b36))



## [1.5.9](https://github.com/Tencent/tmagic-editor/compare/v1.5.8...v1.5.9) (2025-02-20)


### Bug Fixes

* **editor:** 编辑器销毁不应该移除依赖收集任务的事件监听 ([6e2b5ae](https://github.com/Tencent/tmagic-editor/commit/6e2b5aea47cc1059d4b92a85b9801d7af4f9b3b9))


### Features

* **table:** formatter添加index信息 ([4d77b66](https://github.com/Tencent/tmagic-editor/commit/4d77b669baf68f3346aa64d52dea6f75712b1af4))
* **table:** 支持type: index的序号列 ([6f2c6b1](https://github.com/Tencent/tmagic-editor/commit/6f2c6b151d59aca8899742c724c44dbde7d01a89))



## [1.5.8](https://github.com/Tencent/tmagic-editor/compare/v1.5.7...v1.5.8) (2025-02-11)


### Bug Fixes

* **editor:** 组件配置列大小缓存不生效 ([6d82c0f](https://github.com/Tencent/tmagic-editor/commit/6d82c0f730ff0ad7dc36b39b7c0d2534672b05c3))


### Features

* **editor:** 优化依赖收集状态显示，新增剩余任务数量显示 ([413134b](https://github.com/Tencent/tmagic-editor/commit/413134b21d3966bf7f1dbb1da6e2596f2c582bff))



## [1.5.7](https://github.com/Tencent/tmagic-editor/compare/v1.5.6...v1.5.7) (2025-02-11)



## [1.5.6](https://github.com/Tencent/tmagic-editor/compare/v1.5.5...v1.5.6) (2025-02-10)


### Bug Fixes

* **core:** deep-state-observer update 的data与初始化时相同，导致get data为空 ([701a9d6](https://github.com/Tencent/tmagic-editor/commit/701a9d6f3043f77048f6b9be3bc2305adb14d57e))
* **editor:** 修改数据源可能造成页面卡死 ([e9c6a3b](https://github.com/Tencent/tmagic-editor/commit/e9c6a3bb2fd5b3b4cecffcedef47a020dba0fde2))
* **editor:** 已经配置了的样式无法删除 ([e8461f9](https://github.com/Tencent/tmagic-editor/commit/e8461f91e62031f87dbc976f41e873f2bcc3c00c))
* **editor:** 编辑器组件销毁后重置依赖收集 ([51ca1e6](https://github.com/Tencent/tmagic-editor/commit/51ca1e60af1ca89e6b5966825e6c0ed3707f4582))


### Features

* **editor:** 优化浏览器变小时各列大小变化 ([877a4ea](https://github.com/Tencent/tmagic-editor/commit/877a4eaa49b6826e04426e162049db14f6a4f15e))



## [1.5.5](https://github.com/Tencent/tmagic-editor/compare/v1.5.4...v1.5.5) (2025-01-14)


### Features

* **dep:** 性能优化，收集时节点配置中id与name不需要做判断 ([b215062](https://github.com/Tencent/tmagic-editor/commit/b215062177a607ae53e9ef10ffad092f4f506f82))
* **editor:** 优化依赖收集，数据源代码块分开收集 ([040b787](https://github.com/Tencent/tmagic-editor/commit/040b787e8f138759e2acfed4071ffa7cf70eea59))



## [1.5.4](https://github.com/Tencent/tmagic-editor/compare/v1.5.3...v1.5.4) (2025-01-10)


### Bug Fixes

* **element-plus-adapter:** 只有当前没注册loading指令时才注册 ([8b12016](https://github.com/Tencent/tmagic-editor/commit/8b1201626dd2ff410e919da2baec58b0c332303d))
* **element-plus-adapter:** 增加loading指令 ([1bcefdb](https://github.com/Tencent/tmagic-editor/commit/1bcefdb1e8ca851bdd322de860546a906298b02b))



## [1.5.3](https://github.com/Tencent/tmagic-editor/compare/v1.5.2...v1.5.3) (2025-01-06)


### Bug Fixes

* **core:** 公共点击事件在非浏览器环境不执行 ([ec94eed](https://github.com/Tencent/tmagic-editor/commit/ec94eed7871e71136d9d3fcfb561e76048259f1e))
* **editor:** select配置项无法清空 ([833dbcd](https://github.com/Tencent/tmagic-editor/commit/833dbcd8b4c3b5143d0d1c1962c6d69dfa4404d3))


### Features

* **editor,form,schema:** 组件样式配置可视化 ([246e694](https://github.com/Tencent/tmagic-editor/commit/246e6941d565010a069376020c451eb63deb50bd))
* **editor:** 样式配置面板支持拖动大小 ([e8bbdf6](https://github.com/Tencent/tmagic-editor/commit/e8bbdf613b2a36313b5cd6bd9df5d68d1f1a45d3))
* **editor:** 配置组件时将样式中的空配置移除 ([7b0a476](https://github.com/Tencent/tmagic-editor/commit/7b0a476677c36f606c63825f99df7d2537fffa8d))
* **form:** groupList支持复制单条记录，支持移动单条记得到指定位置，table支持复制单条记录 ([a831413](https://github.com/Tencent/tmagic-editor/commit/a831413151f1006811e160796404f06f1f353bc6))



## [1.5.2](https://github.com/Tencent/tmagic-editor/compare/v1.5.1...v1.5.2) (2024-12-18)


### Bug Fixes

* **editor:** data-source-field-select透传eventData ([d48d40a](https://github.com/Tencent/tmagic-editor/commit/d48d40a2b75da06ebac5e4d9a6d3d351e3a966f5))



## [1.5.1](https://github.com/Tencent/tmagic-editor/compare/v1.5.0...v1.5.1) (2024-12-18)


### Bug Fixes

* **form:** table 开启dropSort后，多次拖动row后会报错 ([957b0d9](https://github.com/Tencent/tmagic-editor/commit/957b0d9b40fbf5786d5cbbc35db50d12775ae502))


### Features

* **design:** table添加row/cell class name ([432f1f5](https://github.com/Tencent/tmagic-editor/commit/432f1f5a559429352258736105cc865b310dbda9))
* **editor:** 数据源/代码编辑列表新增右键菜单 ([74f76d0](https://github.com/Tencent/tmagic-editor/commit/74f76d0ba31881cbff93dfe967e6ef38e69f96e9))
* **editor:** 样式添加display配置，右侧边栏最小值设置成420 ([712e317](https://github.com/Tencent/tmagic-editor/commit/712e317e40ea171c920a3ba9f0cad5b0b0161440))
* **editor:** 组件配置中的样式支持单独一列显示 ([5cd6d21](https://github.com/Tencent/tmagic-editor/commit/5cd6d21b2e14eb846313c7af6c859934c187a446))
* **form:** 新增labelPosition配置 ([7a8da68](https://github.com/Tencent/tmagic-editor/commit/7a8da68edb2ccc1dcbe876dff96695513965e6a2))
* **vue-components,react-components:** 组件表单配置修改 ([e421a58](https://github.com/Tencent/tmagic-editor/commit/e421a58f4ea14bd9b6b9ef12e743fb018fead1b6))



# [1.5.0](https://github.com/Tencent/tmagic-editor/compare/v1.4.18...v1.5.0) (2024-12-10)


### Bug Fixes

* **cli:** keepPackageJsonClean开启后lock不要修改 ([a569d51](https://github.com/Tencent/tmagic-editor/commit/a569d51f6b7e6362d5f13027ee1f7277343cdcb7))
* **cli:** 组件库未npm包时其中的组件无法识别 ([e6909dc](https://github.com/Tencent/tmagic-editor/commit/e6909dc0523a30b4ce5d686e10fae1f4b611d895))
* **core:** devtools更新代码块函数可能没有name，导致失败 ([d881523](https://github.com/Tencent/tmagic-editor/commit/d8815237f542007e5f5b818a296cf6830f9ba42a))
* **core:** 没有数据源配置时，不初始化数据源事件 ([2186fc4](https://github.com/Tencent/tmagic-editor/commit/2186fc4e87f9626410ef43b1a48cb00c2792d064))
* **data-source:** http数据源中mock数据应该是数据源定义好的数据，不再是请求的数据源 ([2564631](https://github.com/Tencent/tmagic-editor/commit/25646317ae14a29dc83e3525d605822bd45d62e4))
* **data-source:** http数据源中mock配置中关闭启用后，不会执行request ([ea79a0d](https://github.com/Tencent/tmagic-editor/commit/ea79a0d6013b1a132c6180807e9d2d730e9283d1))
* **data-source:** manager初始化数据源时，如果失败了要把data中对应的数据删掉，不然在ssr中会导致客户端不会重新尝试请求 ([fd80bad](https://github.com/Tencent/tmagic-editor/commit/fd80bada977bff90b085daa29fc940663d6c011f))
* **data-source:** 执行时机函数需要await ([5caae4e](https://github.com/Tencent/tmagic-editor/commit/5caae4e95338ea5c41e5bb351324d761d6b8f23b))
* **data-source:** 编辑器中迭代器容器中的容器添加组件并关联数据源后没有编译 ([8aba06a](https://github.com/Tencent/tmagic-editor/commit/8aba06ac3851134887ca1c256c527e6eff8fe732))
* **data-source:** 迭代内容多层嵌套下子组件条件配置不生效 ([e057ddc](https://github.com/Tencent/tmagic-editor/commit/e057ddc18704fe7efcf494ca66c64c9dd9229946))
* **data-source:** 避免http数据源在编辑器中的响应裁剪中修改到mock配置的数据 ([f6885a0](https://github.com/Tencent/tmagic-editor/commit/f6885a06b6f4c646cfb99f595c59e95cef548927))
* **dep:** 数据源条件依赖收集默认不收集迭代器内部组件的依赖 ([6754c3a](https://github.com/Tencent/tmagic-editor/commit/6754c3a8a556a86eea3aecc25a2d5b7cbcf0fe70))
* **design:** popover zindex不生效 ([e53c0e1](https://github.com/Tencent/tmagic-editor/commit/e53c0e1ce531f94cc1a2a6b8f15cbc24a9261519))
* **editor:** stage销毁问题 ([0d901c0](https://github.com/Tencent/tmagic-editor/commit/0d901c018ffe96d042f1a6e89ad2a90d38a06277))
* **editor:** 事件中选择联动组件无法再组件树中选择 ([d58cac7](https://github.com/Tencent/tmagic-editor/commit/d58cac7909ece2c514aa357db78a63cfd52a0df4))
* **editor:** 修复修改页面配置后可能改造页面卡死问题 ([fc38fc3](https://github.com/Tencent/tmagic-editor/commit/fc38fc3957f00d6a687799d8ec035f531bd706a8))
* **editor:** 修改未包含数据源的配置，画布中没有实时更新 ([0d64202](https://github.com/Tencent/tmagic-editor/commit/0d6420215c87f85fbf87bcd80d8ee295075fc1d9))
* **editor:** 更新组件配置后，如果当前没有任何依赖，不会触发收集，导致画布不更新 ([d33ddcf](https://github.com/Tencent/tmagic-editor/commit/d33ddcfa65232a8c03c78ae164e06eb15feaf6cb))
* **form:** datarange组件如果传入utc时间,显示会出错 ([e6239af](https://github.com/Tencent/tmagic-editor/commit/e6239af7d891053286d532f2ed7060989150d3eb))
* **form:** datatime没有初始值时异常 ([b24b374](https://github.com/Tencent/tmagic-editor/commit/b24b3749c48654919480ab146cc1667be6ede8d0))
* **form:** date组件初始化时不显示值 ([0c665c6](https://github.com/Tencent/tmagic-editor/commit/0c665c6b3c7d519f9f1edbb70a693c10a8db4e40))
* **form:** text组件配置了tooltip无效 ([3a7bfef](https://github.com/Tencent/tmagic-editor/commit/3a7bfef5cf7b7aeb46d93f1e739c7f310bc53cd6))
* **stage:** 流水布局拖动无效 ([0544746](https://github.com/Tencent/tmagic-editor/commit/054474634e258a20149ea8ec756603ddd1865258))
* **tmagic-form-runtime:** 画布无法点击选中组件 ([a2c79c7](https://github.com/Tencent/tmagic-editor/commit/a2c79c79cd07e8aa686ed6985d1e6f1284077ff9))
* **vue-component:** 从core中获取utils的方法 ([d9ef4b9](https://github.com/Tencent/tmagic-editor/commit/d9ef4b91fa59fa3dd6d8f8926da24571631f18f0))
* **vue-runtime-help:** 更新dsl时，设置默认选中项与默认页面 ([d119727](https://github.com/Tencent/tmagic-editor/commit/d1197279fd3cb0e05cf592ee8ce152d559776737))
* 迭代器内的组件配置了声明周期代码块无效 ([60d2b64](https://github.com/Tencent/tmagic-editor/commit/60d2b64aa5a321c0b3d8845e5862673d20c8d83d))


### Features

* **cli:** 新增npm install 参数配置 ([3cae4fb](https://github.com/Tencent/tmagic-editor/commit/3cae4fbc1c9f9657b5dbf17a63df3df7bf364295))
* **cli:** 组件库支持import npm包组件 ([5ed534e](https://github.com/Tencent/tmagic-editor/commit/5ed534e36491e196a94e0bb91fa32c810a525242))
* **core:** 新增调试api ([a0f39d9](https://github.com/Tencent/tmagic-editor/commit/a0f39d90d6a9d3d9142f54ff1116e5011ad8c43a))
* **data-source,editor:** http数据源params,data,headers支持函数配置 ([03942dc](https://github.com/Tencent/tmagic-editor/commit/03942dc49ea781bdd17ae8a7ba582491ea722338))
* **data-source:** http数据源参数裁剪与响应裁剪支持异步函数配置 ([5267b4b](https://github.com/Tencent/tmagic-editor/commit/5267b4bb930b29cb688c221cde8d11f2f91dab29))
* **design,element-plus-adapter,tdesign-vue-next-adapter:** 重新实现Popover组件，不再使用element-plus或tdesign组件 ([5e61f23](https://github.com/Tencent/tmagic-editor/commit/5e61f23106b671c862548d4c4d3ca5f14ee724e9))
* **design:** popover 添加destroyOnClose props ([c73a27e](https://github.com/Tencent/tmagic-editor/commit/c73a27eb1a2a876c49c0496d6a48a9a9fbcf3876))
* dsl id渲染到dom上的data-tmagic-id,不再是id属性 ([9e4da0a](https://github.com/Tencent/tmagic-editor/commit/9e4da0a5c2ae968a57c289184f4c1d31ea562357))
* **editor:** export tree组件 ([4f7b6ce](https://github.com/Tencent/tmagic-editor/commit/4f7b6cede46310e1ed757079ce9121ebf2fc359b))
* **editor:** 事件流支持上下文对象传递和abort方法中断 ([52c1124](https://github.com/Tencent/tmagic-editor/commit/52c1124e9767e05979805ae0e9dca5311408e0c0))
* **editor:** 代码块与数据源列表节点中新增依赖收集中tag ([e3f28ab](https://github.com/Tencent/tmagic-editor/commit/e3f28abe1ac90eea4428d144e93f3211f5d086fa))
* **editor:** 优化依赖收集体验，减小收集任务粒度，修改配置时识别是否需要触发重新收集 ([b4136c9](https://github.com/Tencent/tmagic-editor/commit/b4136c91c2aa8b0a138717fb3f878463c3ba4750))
* **editor:** 支持配置页面过滤函数 ([13abe89](https://github.com/Tencent/tmagic-editor/commit/13abe898a92c2b399d93e40290f4dc090ff066cd))
* **editor:** 新增已选组件、代码编辑、数据源及其子节点增量缩进配置 ([47a21d6](https://github.com/Tencent/tmagic-editor/commit/47a21d6544b240cbf5595eca0422bf9a46e1e7b8))
* **editor:** 选中页面后页面列表自动滚动到选中项 ([7a47315](https://github.com/Tencent/tmagic-editor/commit/7a47315bc1bae70cc76778587aeb22511a361a06))
* **editor:** 页面/页面片不再使用tab分开显示，新增搜索页面 ([ed6d9b2](https://github.com/Tencent/tmagic-editor/commit/ed6d9b2b679083022cae962a7cefbdddc799fbe9))
* **edtior,stage:** 重新渲染改成重新收集依赖后渲染 ([6030ed1](https://github.com/Tencent/tmagic-editor/commit/6030ed1684cbd630c917def74343f56cc7ca6743))
* **form,editor:** 表单新增修改数据记录 ([9f7d67b](https://github.com/Tencent/tmagic-editor/commit/9f7d67b17bbe41f32ad96d23f4a605a9cd3c8224))
* **form:** formState现在， ([e3f6ef4](https://github.com/Tencent/tmagic-editor/commit/e3f6ef48e63d778e874588a22864d27ac95101d7))
* **form:** 支持配置阻止默认的submit行为 ([12ce5c5](https://github.com/Tencent/tmagic-editor/commit/12ce5c568ef07ec44b902eeca686cf189d34c2bb))
* **form:** 添加tmagicFormItemProp ([0979282](https://github.com/Tencent/tmagic-editor/commit/09792825049fa2373a56c850e3fe9f076ea0dc48))
* **stage,editor:** 在选中框新增支持触发画布中组件重新渲染 ([0727fe4](https://github.com/Tencent/tmagic-editor/commit/0727fe4fea0c24a1cdeb5b6bd7bf503caa87c1ea))
* **stage:** export MoveableActionsAble; 在选中框上面自定义按钮 ([6e71448](https://github.com/Tencent/tmagic-editor/commit/6e7144815829a0e5aede79a49febe9909043632e))
* **table:** expand支持width fixed配置 ([f30f8ab](https://github.com/Tencent/tmagic-editor/commit/f30f8ab13bffcf48c79ce98ba2957dcf3fbe79e5))
* **table:** 新增createColumns函数 ([6fd3024](https://github.com/Tencent/tmagic-editor/commit/6fd30242c05df79cadf14c87ce21573191c2a674))
* **utils:** 只是自定义dsl与dom el的关联关系函数 ([9494ed7](https://github.com/Tencent/tmagic-editor/commit/9494ed79a3dee9c0bd4ee5acc465f39e8530ccaf))
* **utils:** 新增getGlobalThis方法 ([12230c2](https://github.com/Tencent/tmagic-editor/commit/12230c2f4ee93c3387be59e66c86f0fc312cb7bc))
* **vue-component, runtime:** 使用 app.resolveComponent 获取组件 ([#631](https://github.com/Tencent/tmagic-editor/issues/631)) ([c3bc103](https://github.com/Tencent/tmagic-editor/commit/c3bc1035ad351aef07bbeb75461f4698232c761c))
* **vue-components:** 添加className配置，page新增css、cssFile、jsFile配置 ([9948360](https://github.com/Tencent/tmagic-editor/commit/99483604355552934a5aebc94620474621f9c4e8))
* 完善迭代器嵌套使用问题，重构事件配置处理代码 ([de47514](https://github.com/Tencent/tmagic-editor/commit/de47514f694e6212ad1ecc6b6112d4c7db6dfbae))
* 将ui-react中的组件独立成包 ([cab36b4](https://github.com/Tencent/tmagic-editor/commit/cab36b49a368b1a8e582efaa3ba0fe80debe03ea))
* 统一vue ui组件,将ui中的组件独立成包 ([3758cf8](https://github.com/Tencent/tmagic-editor/commit/3758cf8e0a4648c9b286e7a079e9517d19db7dab))



# [1.5.0-beta.16](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.15...v1.5.0-beta.16) (2024-12-04)


### Bug Fixes

* **core:** 没有数据源配置时，不初始化数据源事件 ([383b9c9](https://github.com/Tencent/tmagic-editor/commit/383b9c926d1d3e5b176fdf5b1fb9056116854c93))
* **data-source:** 执行时机函数需要await ([64a692b](https://github.com/Tencent/tmagic-editor/commit/64a692b32a1d26e03d0ede0c25b6d679dd8a0110))
* **editor:** 修改未包含数据源的配置，画布中没有实时更新 ([b3733fe](https://github.com/Tencent/tmagic-editor/commit/b3733feb969cf4f2222b0202ad38856496c7354c))
* **vue-runtime-help:** 更新dsl时，设置默认选中项与默认页面 ([a38a0a2](https://github.com/Tencent/tmagic-editor/commit/a38a0a2f4ee85ffe700048ef48c50c461c5375a1))


### Features

* **core:** 新增调试api ([ff076f2](https://github.com/Tencent/tmagic-editor/commit/ff076f2ee38ad387587498c694c813f9124a718c))
* **form:** formState现在， ([29a9670](https://github.com/Tencent/tmagic-editor/commit/29a967046185c5cbb6b4b3a8b01b2c20f950434d))
* **utils:** 新增getGlobalThis方法 ([da12ef9](https://github.com/Tencent/tmagic-editor/commit/da12ef9d8df1522353e8f9f60566154fe12b8bd9))
* **vue-components:** 添加className配置，page新增css、cssFile、jsFile配置 ([c7b1f5d](https://github.com/Tencent/tmagic-editor/commit/c7b1f5d925ef5a82c07a02ba58cf542ca6f94f0a))



# [1.5.0-beta.15](https://github.com/Tencent/tmagic-editor/compare/v1.4.19...v1.5.0-beta.15) (2024-11-25)


### Bug Fixes

* **data-source:** http数据源中mock数据应该是数据源定义好的数据，不再是请求的数据源 ([1dc4fa9](https://github.com/Tencent/tmagic-editor/commit/1dc4fa92a581f7469714214234324bc39dfd3b80))
* **data-source:** http数据源中mock配置中关闭启用后，不会执行request ([e153ab1](https://github.com/Tencent/tmagic-editor/commit/e153ab1602e0c4df716fd4783f25483c5c5c31c0))
* **data-source:** manager初始化数据源时，如果失败了要把data中对应的数据删掉，不然在ssr中会导致客户端不会重新尝试请求 ([d844f59](https://github.com/Tencent/tmagic-editor/commit/d844f59dc67ee45af4aa902b0c1457bc4366f8d3))
* **data-source:** 编辑器中迭代器容器中的容器添加组件并关联数据源后没有编译 ([43e0341](https://github.com/Tencent/tmagic-editor/commit/43e0341b1274dc3ca5af7eda0791b3de427d3ebc))
* **data-source:** 迭代内容多层嵌套下子组件条件配置不生效 ([aff000f](https://github.com/Tencent/tmagic-editor/commit/aff000f250f4ae54b555b1d83176c705542141eb))
* **data-source:** 避免http数据源在编辑器中的响应裁剪中修改到mock配置的数据 ([9b05670](https://github.com/Tencent/tmagic-editor/commit/9b056703354b4423b81e929a2862d2a6f2d1c546))
* **dep:** 数据源条件依赖收集默认不收集迭代器内部组件的依赖 ([a4ff865](https://github.com/Tencent/tmagic-editor/commit/a4ff865f63ca2c7c6dbb2e6c77a3e3e0ef21ae38))
* **design:** popover zindex不生效 ([44c0e1f](https://github.com/Tencent/tmagic-editor/commit/44c0e1fb298d9ec50f6657b93b961bd9efaa219b))
* **editor:** stage销毁问题 ([c4ac397](https://github.com/Tencent/tmagic-editor/commit/c4ac397f46fa440be0127aa28c3a95a8c273c8c2))
* **editor:** 修复修改页面配置后可能改造页面卡死问题 ([0faa260](https://github.com/Tencent/tmagic-editor/commit/0faa260f526a10dda5bc0d3b604a5e5396e6da58))
* **editor:** 更新组件配置后，如果当前没有任何依赖，不会触发收集，导致画布不更新 ([44a6760](https://github.com/Tencent/tmagic-editor/commit/44a676053af0797ad7fceab256280a741f4bb5a7))
* **form:** datarange组件如果传入utc时间,显示会出错 ([0bdfee2](https://github.com/Tencent/tmagic-editor/commit/0bdfee28d3d5d4e53aae868731b1ff5b0d9b8167))
* **form:** datatime没有初始值时异常 ([45502b2](https://github.com/Tencent/tmagic-editor/commit/45502b2ef17e26260ad97efab3aa9cd77266823c))
* **form:** date组件初始化时不显示值 ([0d60542](https://github.com/Tencent/tmagic-editor/commit/0d605425d87d201f57bfc1ae84062326b32d95d5))
* **stage:** 流水布局拖动无效 ([a0853ae](https://github.com/Tencent/tmagic-editor/commit/a0853aee8b8a29a88c12e62d94dc445ba7648522))
* **tmagic-form-runtime:** 画布无法点击选中组件 ([95b8248](https://github.com/Tencent/tmagic-editor/commit/95b824839e737a7d8d2546b62469f33c561e7b16))
* **vue-component:** 从core中获取utils的方法 ([5f6550f](https://github.com/Tencent/tmagic-editor/commit/5f6550f9620fde53f5439932530035acabf49b06))
* 迭代器内的组件配置了声明周期代码块无效 ([8c7a408](https://github.com/Tencent/tmagic-editor/commit/8c7a408f63bb8e2065d0a94842b9d497bb2870f2))


### Features

* **cli:** 组件库支持import npm包组件 ([53e83c8](https://github.com/Tencent/tmagic-editor/commit/53e83c872db56c13e0f40efefcdc07bd4c3c3c54))
* **data-source,editor:** http数据源params,data,headers支持函数配置 ([b7c59c9](https://github.com/Tencent/tmagic-editor/commit/b7c59c9c0e85b16360dae54ba721388754dec658))
* **data-source:** http数据源参数裁剪与响应裁剪支持异步函数配置 ([aa6bff5](https://github.com/Tencent/tmagic-editor/commit/aa6bff525dfca7169e4824a0311b216f170a3d88))
* **design,element-plus-adapter,tdesign-vue-next-adapter:** 重新实现Popover组件，不再使用element-plus或tdesign组件 ([468849c](https://github.com/Tencent/tmagic-editor/commit/468849cfe098100a90c7c3e692d440e012dd53cd))
* **design:** popover 添加destroyOnClose props ([f7a5b16](https://github.com/Tencent/tmagic-editor/commit/f7a5b164ef82a530423ab50f6c8290ef366a9923))
* dsl id渲染到dom上的data-tamgic-id,不再是id属性 ([35aa916](https://github.com/Tencent/tmagic-editor/commit/35aa916e769dcee3c31dc981ab669ddb66cdbe9b))
* **editor:** export tree组件 ([b7d3115](https://github.com/Tencent/tmagic-editor/commit/b7d31152fe094a96756efc6db17ce2bbfa019ccd))
* **editor:** 事件流支持上下文对象传递和abort方法中断 ([cc2cea5](https://github.com/Tencent/tmagic-editor/commit/cc2cea586c4aebc50aeee7ce1948da80008eb486))
* **editor:** 代码块与数据源列表节点中新增依赖收集中tag ([8a8ccae](https://github.com/Tencent/tmagic-editor/commit/8a8ccae7ed78afd60be6859bfbe5b3b024d3e6dc))
* **editor:** 优化依赖收集体验，减小收集任务粒度，修改配置时识别是否需要触发重新收集 ([3889888](https://github.com/Tencent/tmagic-editor/commit/38898889c411a918369869b64a86d0774c329126))
* **editor:** 支持配置页面过滤函数 ([d599334](https://github.com/Tencent/tmagic-editor/commit/d59933439e2a94e6031e9650d0423b0e4092741f))
* **editor:** 新增已选组件、代码编辑、数据源及其子节点增量缩进配置 ([dc63ea1](https://github.com/Tencent/tmagic-editor/commit/dc63ea1a9f654f0d81e531358c122d36e1659c01))
* **editor:** 选中页面后页面列表自动滚动到选中项 ([1d95224](https://github.com/Tencent/tmagic-editor/commit/1d952248dc4083dbdf04e6ff09b0438005611ea2))
* **editor:** 页面/页面片不再使用tab分开显示，新增搜索页面 ([cda915d](https://github.com/Tencent/tmagic-editor/commit/cda915d6f8d638e7ce50c65d6119ad32a600e0c8))
* **edtior,stage:** 重新渲染改成重新收集依赖后渲染 ([a0dd484](https://github.com/Tencent/tmagic-editor/commit/a0dd48446c2219ef0a3a77d83510f226e2f86a4b))
* **form,editor:** 表单新增修改数据记录 ([71cfd5b](https://github.com/Tencent/tmagic-editor/commit/71cfd5bfacb1eddd271384ccc307753545fc1f56))
* **form:** 支持配置阻止默认的submit行为 ([37bc386](https://github.com/Tencent/tmagic-editor/commit/37bc3867ebec37ed4572982263f8ddb85a8f679d))
* **form:** 添加tmagicFormItemProp ([86c092e](https://github.com/Tencent/tmagic-editor/commit/86c092eadb509fa9c2999a5e92d7fb0970fea6a3))
* **stage,editor:** 在选中框新增支持触发画布中组件重新渲染 ([19599bc](https://github.com/Tencent/tmagic-editor/commit/19599bc414792c3098e53219b55634e37780ba9e))
* **stage:** export MoveableActionsAble; 在选中框上面自定义按钮 ([ca0cb21](https://github.com/Tencent/tmagic-editor/commit/ca0cb218f65f5d6e00e5ab1dd7f6b6fe3706caeb))
* **table:** expand支持width fixed配置 ([61c8bbe](https://github.com/Tencent/tmagic-editor/commit/61c8bbea180188b35fe467947aac856a0576b449))
* **table:** 新增createColumns函数 ([b5a81e2](https://github.com/Tencent/tmagic-editor/commit/b5a81e2121a6818df6e02c20792fe73203f8dde6))
* **uitls:** 只是自定义dsl与dom el的关联关系函数 ([25bf011](https://github.com/Tencent/tmagic-editor/commit/25bf011afe53414074599e76c4a9d388a61c015d))
* **vue-component, runtime:** 使用 app.resolveComponent 获取组件 ([#631](https://github.com/Tencent/tmagic-editor/issues/631)) ([4004c42](https://github.com/Tencent/tmagic-editor/commit/4004c424f6f99dac3150229431d511bfdacd4108))
* 完善迭代器嵌套使用问题，重构事件配置处理代码 ([f6dec31](https://github.com/Tencent/tmagic-editor/commit/f6dec31ef4e1cf51b9e1ad23c8134293dd529083))
* 将ui-react中的组件独立成包 ([dbb7cde](https://github.com/Tencent/tmagic-editor/commit/dbb7cde48a60ff580a23cb0b37f48f3aa081d745))
* 统一vue ui组件,将ui中的组件独立成包 ([7a0d99e](https://github.com/Tencent/tmagic-editor/commit/7a0d99e3b5c383a55e8aba67aeebdfe5c52d7bce))



## [1.4.19](https://github.com/Tencent/tmagic-editor/compare/v1.4.18...v1.4.19) (2024-10-31)


### Bug Fixes

* **form:** text组件配置了tooltip无效 ([3a7bfef](https://github.com/Tencent/tmagic-editor/commit/3a7bfef5cf7b7aeb46d93f1e739c7f310bc53cd6))


# [1.5.0-beta.14](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.13...v1.5.0-beta.14) (2024-10-25)


### Bug Fixes

* **form:** datatime没有初始值时异常 ([f265abc](https://github.com/Tencent/tmagic-editor/commit/f265abcb3233b0c5a3cc7a315f87e62c572f1655))



# [1.5.0-beta.13](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.12...v1.5.0-beta.13) (2024-10-09)


### Bug Fixes

* **editor:** 更新组件配置后，如果当前没有任何依赖，不会触发收集，导致画布不更新 ([c03de90](https://github.com/Tencent/tmagic-editor/commit/c03de90970a233259f3f0471ab2d28aa029f1b2c))


### Features

* **editor:** 支持配置页面过滤函数 ([7a536e4](https://github.com/Tencent/tmagic-editor/commit/7a536e497acf4e0f8e4ee214e6fbe5dc12c48075))
* **form:** 支持配置阻止默认的submit行为 ([e8ef1fb](https://github.com/Tencent/tmagic-editor/commit/e8ef1fb52b53e8ead9ad1507fb15a35e9b1de1dd))



# [1.5.0-beta.12](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.11...v1.5.0-beta.12) (2024-09-29)


### Bug Fixes

* **editor:** 修复修改页面配置后可能改造页面卡死问题 ([2337448](https://github.com/Tencent/tmagic-editor/commit/23374487466ca513b363060fa3a3b1adc5b72528))


### Features

* **editor:** 页面/页面片不再使用tab分开显示，新增搜索页面 ([a88ad84](https://github.com/Tencent/tmagic-editor/commit/a88ad845c8820be6c9959329a064ffa9278b74d9))



# [1.5.0-beta.11](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.10...v1.5.0-beta.11) (2024-09-20)


### Bug Fixes

* **data-source:** http数据源中mock数据应该是数据源定义好的数据，不再是请求的数据源 ([9ff36ea](https://github.com/Tencent/tmagic-editor/commit/9ff36eae5477903709fe207321c2d557fa8c86ea))



# [1.5.0-beta.10](https://github.com/Tencent/tmagic-editor/compare/v1.4.18...v1.5.0-beta.10) (2024-09-19)


### Bug Fixes

* **data-source:** http数据源中mock配置中关闭启用后，不会执行request ([11946dc](https://github.com/Tencent/tmagic-editor/commit/11946dc0ea7eb0cbde593d532bdedc797485148a))
* **data-source:** manager初始化数据源时，如果失败了要把data中对应的数据删掉，不然在ssr中会导致客户端不会重新尝试请求 ([265721c](https://github.com/Tencent/tmagic-editor/commit/265721cdd9346fc394f40a163676e99d55ef9c5e))
* **data-source:** 编辑器中迭代器容器中的容器添加组件并关联数据源后没有编译 ([0d1e28b](https://github.com/Tencent/tmagic-editor/commit/0d1e28bbc01e09f353b38b33fc94c0ff30ed5ed9))
* **data-source:** 迭代内容多层嵌套下子组件条件配置不生效 ([039a5c4](https://github.com/Tencent/tmagic-editor/commit/039a5c412898e7ae570c1e22db8007e6efbe3fb1))
* **data-source:** 避免http数据源在编辑器中的响应裁剪中修改到mock配置的数据 ([3391a7b](https://github.com/Tencent/tmagic-editor/commit/3391a7b1b0963cb5c6174c3cc34d5223cfaed5e3))
* **dep:** 数据源条件依赖收集默认不收集迭代器内部组件的依赖 ([d70eb7c](https://github.com/Tencent/tmagic-editor/commit/d70eb7ce88594c428df794b25123f51b8b5a31ac))
* **design:** popover zindex不生效 ([b9aaa61](https://github.com/Tencent/tmagic-editor/commit/b9aaa616f5ae1d06a96b2c72f3e0bff3f963782e))
* **editor:** stage销毁问题 ([3a59c09](https://github.com/Tencent/tmagic-editor/commit/3a59c09c5b0de654a701f5a31deb229d5142cf62))
* **form:** datarange组件如果传入utc时间,显示会出错 ([2f3faba](https://github.com/Tencent/tmagic-editor/commit/2f3faba7288b78e15c869c464364faf35229ce22))
* **form:** date组件初始化时不显示值 ([e78726c](https://github.com/Tencent/tmagic-editor/commit/e78726c632b5ee4dc2f6a2b9c0ec526ba8a63746))
* **stage:** 流水布局拖动无效 ([b1d4479](https://github.com/Tencent/tmagic-editor/commit/b1d447961460bc1643c0644ea655a3355923f607))
* **tmagic-form-runtime:** 画布无法点击选中组件 ([2745ec5](https://github.com/Tencent/tmagic-editor/commit/2745ec5a83d4f4ed5493397762e6318bfbcf2549))
* **vue-component:** 从core中获取utils的方法 ([7bec741](https://github.com/Tencent/tmagic-editor/commit/7bec741d2a96398f0b661c683c6dcdd4aa3dffba))
* 迭代器内的组件配置了声明周期代码块无效 ([85b038a](https://github.com/Tencent/tmagic-editor/commit/85b038a0dde3d083439477ebc3b6bd9ecf8214c3))


### Features

* **cli:** 组件库支持import npm包组件 ([3dec58d](https://github.com/Tencent/tmagic-editor/commit/3dec58dbf324b993a271461a77974a9c8797e320))
* **data-source:** http数据源参数裁剪与响应裁剪支持异步函数配置 ([8b646e5](https://github.com/Tencent/tmagic-editor/commit/8b646e58678733550dbb093437e6a69ef45a454f))
* **design,element-plus-adapter,tdesign-vue-next-adapter:** 重新实现Popover组件，不再使用element-plus或tdesign组件 ([0fcc0ac](https://github.com/Tencent/tmagic-editor/commit/0fcc0acab24a599f2d8f8efe15bc9086352f19b0))
* **design:** popover 添加destroyOnClose props ([672a76d](https://github.com/Tencent/tmagic-editor/commit/672a76d0cbd16370a6628125e84de5a4a377aac6))
* dsl id渲染到dom上的data-tamgic-id,不再是id属性 ([e19bdc6](https://github.com/Tencent/tmagic-editor/commit/e19bdc673378c652f7068fb549dae81f9125754b))
* **editor:** export tree组件 ([8fd83f9](https://github.com/Tencent/tmagic-editor/commit/8fd83f92e931d274ef8816b12e588c7fb67a969d))
* **editor:** 新增已选组件、代码编辑、数据源及其子节点增量缩进配置 ([bcd3ad4](https://github.com/Tencent/tmagic-editor/commit/bcd3ad40fb1a56cd9719d41cf7b7017106e455c0))
* **form:** 添加tmagicFormItemProp ([f7af42c](https://github.com/Tencent/tmagic-editor/commit/f7af42cb31466b650d64deca14a80ae44247c195))
* **stage:** export MoveableActionsAble; 在选中框上面自定义按钮 ([ed90e00](https://github.com/Tencent/tmagic-editor/commit/ed90e007f43912c94f4aa7e270cb9be54569aa29))
* **table:** expand支持width fixed配置 ([50c8d30](https://github.com/Tencent/tmagic-editor/commit/50c8d307bf26c30679c7be7ac81f9588ba536517))
* **table:** 新增createColumns函数 ([540239a](https://github.com/Tencent/tmagic-editor/commit/540239a7a273b236ec359d2b15fccdbbcc65defd))
* **uitls:** 只是自定义dsl与dom el的关联关系函数 ([ae638bb](https://github.com/Tencent/tmagic-editor/commit/ae638bb26f5a4236eb5fab269b97cb58f3211181))
* **vue-component, runtime:** 使用 app.resolveComponent 获取组件 ([#631](https://github.com/Tencent/tmagic-editor/issues/631)) ([d05b9d2](https://github.com/Tencent/tmagic-editor/commit/d05b9d2becae263614001b8de73e10f783b94084))
* 完善迭代器嵌套使用问题，重构事件配置处理代码 ([ba85c63](https://github.com/Tencent/tmagic-editor/commit/ba85c63d5b5813848a24b185eb997edc92de606c))
* 将ui-react中的组件独立成包 ([5a5e5c7](https://github.com/Tencent/tmagic-editor/commit/5a5e5c72c22951112c403b8f910509bb7d75611e))
* 统一vue ui组件,将ui中的组件独立成包 ([757849b](https://github.com/Tencent/tmagic-editor/commit/757849be0d7c3415d51602c3663ad4f80f32f39e))



# [1.4.18](https://github.com/Tencent/tmagic-editor/compare/v1.4.17...v1.4.18) (2024-09-14)


# [1.5.0-beta.9](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.8...v1.5.0-beta.9) (2024-09-13)


### Bug Fixes

* **data-source:** manager初始化数据源时，如果失败了要把data中对应的数据删掉，不然在ssr中会导致客户端不会重新尝试请求 ([35e099c](https://github.com/Tencent/tmagic-editor/commit/35e099c26cf09e1cfd2becb339635130382206b0))
* **stage:** 流水布局拖动无效 ([3d3ae5b](https://github.com/Tencent/tmagic-editor/commit/3d3ae5b028d794d357214cbab6d7ccdc76c02214))



# [1.5.0-beta.8](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.7...v1.5.0-beta.8) (2024-09-06)


### Bug Fixes

* **form:** datarange组件如果传入utc时间,显示会出错 ([c77c0db](https://github.com/Tencent/tmagic-editor/commit/c77c0db0de69eeac29b52e8d55bb61dae7c6e750))



# [1.5.0-beta.7](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.6...v1.5.0-beta.7) (2024-09-05)


### Bug Fixes

* **form:** date组件初始化时不显示值 ([f90822d](https://github.com/Tencent/tmagic-editor/commit/f90822dccebf66a2c64569ce4f95243b2a822402))
* **vue-component:** 从core中获取utils的方法 ([db6f208](https://github.com/Tencent/tmagic-editor/commit/db6f2080acbd58433a52b3bac8c502f0d5cded6d))



# [1.5.0-beta.6](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.5...v1.5.0-beta.6) (2024-09-05)


### Features

* **table:** 新增createColumns函数 ([de0e386](https://github.com/Tencent/tmagic-editor/commit/de0e386acc86303122ec7ba8cdc1f37b9490f880))



# [1.5.0-beta.5](https://github.com/Tencent/tmagic-editor/compare/v1.4.17...v1.5.0-beta.5) (2024-09-04)


### Bug Fixes

* **data-source:** http数据源中mock配置中关闭启用后，不会执行request ([127a87c](https://github.com/Tencent/tmagic-editor/commit/127a87c275d68503c66bf850755e160e58564ead))
* **data-source:** 迭代内容多层嵌套下子组件条件配置不生效 ([fb97db6](https://github.com/Tencent/tmagic-editor/commit/fb97db61a4dd14e81d3dff9963a363bcec909cc3))
* **dep:** 数据源条件依赖收集默认不收集迭代器内部组件的依赖 ([dc499fd](https://github.com/Tencent/tmagic-editor/commit/dc499fd8d5dfbf46f60a3157bf1d41392539f319))
* **design:** popover zindex不生效 ([caff3e3](https://github.com/Tencent/tmagic-editor/commit/caff3e3f50864440c6336db18aa72612f25344fc))
* **editor:** stage销毁问题 ([7d57a7a](https://github.com/Tencent/tmagic-editor/commit/7d57a7a094842430a9d96a283004c20b9fff76f3))
* **tmagic-form-runtime:** 画布无法点击选中组件 ([138cf59](https://github.com/Tencent/tmagic-editor/commit/138cf59ce626bfdfc141c926259443917aa6d27d))
* 迭代器内的组件配置了声明周期代码块无效 ([0d3b461](https://github.com/Tencent/tmagic-editor/commit/0d3b4619b283a3c8f22de201d980c0e507d517f9))


### Features

* **cli:** 组件库支持import npm包组件 ([00e1463](https://github.com/Tencent/tmagic-editor/commit/00e14635be032a90ebe0124b6ba708b74adfc528))
* **design,element-plus-adapter,tdesign-vue-next-adapter:** 重新实现Popover组件，不再使用element-plus或tdesign组件 ([9378bad](https://github.com/Tencent/tmagic-editor/commit/9378badcec58a3e753b1ddcda27ad9cd898e7869))
* **design:** popover 添加destroyOnClose props ([9fd347e](https://github.com/Tencent/tmagic-editor/commit/9fd347e9a75521b1e05f8c46bf400606e7fbc209))
* dsl id渲染到dom上的data-tamgic-id,不再是id属性 ([916b5a3](https://github.com/Tencent/tmagic-editor/commit/916b5a3b5e5f2fd969e391535ebc3eac4a1938ba))
* **editor:** export tree组件 ([7880a3e](https://github.com/Tencent/tmagic-editor/commit/7880a3e602a66b2e16fb7b6d6dd9218e6069f747))
* **editor:** 新增已选组件、代码编辑、数据源及其子节点增量缩进配置 ([d0e3a7c](https://github.com/Tencent/tmagic-editor/commit/d0e3a7c3d559d0b3535c23526c1b3bd74f8b6c64))
* **form:** 添加tmagicFormItemProp ([59eeb7c](https://github.com/Tencent/tmagic-editor/commit/59eeb7cffdbab4d281cb6f20a13f0f67aece7ee3))
* **stage:** export MoveableActionsAble; 在选中框上面自定义按钮 ([18741d3](https://github.com/Tencent/tmagic-editor/commit/18741d3e2e9a7f730ea90093163156080f4316f2))
* **table:** expand支持width fixed配置 ([6aeb647](https://github.com/Tencent/tmagic-editor/commit/6aeb6476a5c0a23bed7d17bd6dd6e848241843b3))
* **uitls:** 只是自定义dsl与dom el的关联关系函数 ([26efbee](https://github.com/Tencent/tmagic-editor/commit/26efbee3c8d61a4e635ec373f7947fe3eb498a5a))
* **vue-component, runtime:** 使用 app.resolveComponent 获取组件 ([#631](https://github.com/Tencent/tmagic-editor/issues/631)) ([53456d4](https://github.com/Tencent/tmagic-editor/commit/53456d40adf28a30b483c01b5dc069461cd26b84))
* 完善迭代器嵌套使用问题，重构事件配置处理代码 ([6174f93](https://github.com/Tencent/tmagic-editor/commit/6174f937a80215a1e0fce43d5b5c6b1431dd8b0c))
* 将ui-react中的组件独立成包 ([e521c87](https://github.com/Tencent/tmagic-editor/commit/e521c874dea040d978040a01c1f227f3c3b97ddb))
* 统一vue ui组件,将ui中的组件独立成包 ([c5a0098](https://github.com/Tencent/tmagic-editor/commit/c5a0098ed9055d6fc646b20971abbed68f3a0a59))



## [1.4.17](https://github.com/Tencent/tmagic-editor/compare/v1.4.16...v1.4.17) (2024-08-30)


### Bug Fixes

* **data-source:** 编辑器的runtime不能对数据源的mock配置有影响 ([fa2d00b](https://github.com/Tencent/tmagic-editor/commit/fa2d00ba3689b9b336a5a2d44c731a3fa4ce61f6))
* **form:** date相关的field,在没有配置valueFormat的情况下与默认的valueFormat不符 ([883e227](https://github.com/Tencent/tmagic-editor/commit/883e227d54c7f07b13bb190bc5f97a9e63671193))


### Features

* **vue-runtime-help:** 只有dsl中的组件才触发生命周期hook ([69f3cb2](https://github.com/Tencent/tmagic-editor/commit/69f3cb2f12d8b2e18ac957caa5f655024cbc8577))


# [1.5.0-beta.4](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.3...v1.5.0-beta.4) (2024-08-22)


### Bug Fixes

* **data-source:** 迭代内容多层嵌套下子组件条件配置不生效 ([e6f298a](https://github.com/Tencent/tmagic-editor/commit/e6f298af7120d6fc808e00b8df22a8ce69f3f990))


# [1.5.0-beta.3](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.2...v1.5.0-beta.3) (2024-08-22)


### Bug Fixes

* **dep:** 数据源条件依赖收集默认不收集迭代器内部组件的依赖 ([2d285d2](https://github.com/Tencent/tmagic-editor/commit/2d285d22926b443d59f52657ef0cbf86eeae3ffe))


# [1.5.0-beta.2](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.1...v1.5.0-beta.2) (2024-08-21)


### Bug Fixes

* **data-source:** http数据源中mock配置中关闭启用后，不会执行request ([18fa541](https://github.com/Tencent/tmagic-editor/commit/18fa541a3c7f0b39820b2ab09c31bea65b36222f))


### Features

* **design:** popover 添加destroyOnClose props ([8b1c639](https://github.com/Tencent/tmagic-editor/commit/8b1c63995306ad00baed3153247f6abf703643ce))
* **form:** 添加tmagicFormItemProp ([c81a7b4](https://github.com/Tencent/tmagic-editor/commit/c81a7b46e252577823824637a847e1601a0db0a7))


# [1.5.0-beta.1](https://github.com/Tencent/tmagic-editor/compare/v1.5.0-beta.0...v1.5.0-beta.1) (2024-08-15)


### Bug Fixes

* **design:** popover zindex不生效 ([547fbda](https://github.com/Tencent/tmagic-editor/commit/547fbda53c6abf92a47882d85886b196ae4f1d02))


### Features

* **editor:** export tree组件 ([f61492b](https://github.com/Tencent/tmagic-editor/commit/f61492be84b019bbbebcfcb8b6517fe4c451242c))


# [1.5.0-beta.0](https://github.com/Tencent/tmagic-editor/compare/v1.4.16...v1.5.0-beta.0) (2024-08-15)


### Bug Fixes

* **data-source:** 编辑器的runtime不能对数据源的mock配置有影响 ([fa2d00b](https://github.com/Tencent/tmagic-editor/commit/fa2d00ba3689b9b336a5a2d44c731a3fa4ce61f6))
* 迭代器内的组件配置了声明周期代码块无效 ([fb6f806](https://github.com/Tencent/tmagic-editor/commit/fb6f8068cef90a7aac66038f94fd0937637909c2))


### Features

* **cli:** 组件库支持import npm包组件 ([e82591e](https://github.com/Tencent/tmagic-editor/commit/e82591ee23c5b2e1c3efb6e21ec6f879631e5d67))
* **design,element-plus-adapter,tdesign-vue-next-adapter:** 重新实现Popover组件，不再使用element-plus或tdesign组件 ([677a193](https://github.com/Tencent/tmagic-editor/commit/677a1938a44c2defc4691e888e40b26eb44bdaa5))
* dsl id渲染到dom上的data-tamgic-id,不再是id属性 ([47a037a](https://github.com/Tencent/tmagic-editor/commit/47a037a8a5595b844f3a74dead876a0cebcf7eb6))
* **uitls:** 只是自定义dsl与dom el的关联关系函数 ([16b8948](https://github.com/Tencent/tmagic-editor/commit/16b8948e4d3d935df89c41ee69d983846f8d0f6c))
* **vue-runtime-help:** 只有dsl中的组件才触发生命周期hook ([69f3cb2](https://github.com/Tencent/tmagic-editor/commit/69f3cb2f12d8b2e18ac957caa5f655024cbc8577))
* 完善迭代器嵌套使用问题，重构事件配置处理代码 ([f7d5a4f](https://github.com/Tencent/tmagic-editor/commit/f7d5a4ffd6b275dbf3449fc358d2310b8205bca9))
* 将ui-react中的组件独立成包 ([df9b581](https://github.com/Tencent/tmagic-editor/commit/df9b581623ee138a316d19c7b0c11d76b80effc2))
* 统一vue ui组件,将ui中的组件独立成包 ([ac3cb74](https://github.com/Tencent/tmagic-editor/commit/ac3cb74693f32ba857797a11b549f34aaefc9cf6))

## [1.4.16](https://github.com/Tencent/tmagic-editor/compare/v1.4.15...v1.4.16) (2024-08-02)


### Bug Fixes

* **ui:** 页面style没有响应式了 ([81a221e](https://github.com/Tencent/tmagic-editor/commit/81a221e56171c299d9599f4440557e822c2fc186))


### Features

* **core:** 完善屏幕大小自动适配 ([59f0527](https://github.com/Tencent/tmagic-editor/commit/59f05270ae019d4baa04d7c2ce86a5c88e05e16b))



## [1.4.15](https://github.com/Tencent/tmagic-editor/compare/v1.4.14...v1.4.15) (2024-07-26)


### Bug Fixes

* **data-source:** 迭代器数据编译支持容器嵌套 ([e209aa3](https://github.com/Tencent/tmagic-editor/commit/e209aa36e88ff567932e6374cae37097c19b6883))
* **editor:** 在组件树中多选时不能选中页面 ([c456798](https://github.com/Tencent/tmagic-editor/commit/c45679875162069033096b307c06320346798d76))
* **editor:** 数据源方法配置，设置后再次修改参数配置不显示 ([059c005](https://github.com/Tencent/tmagic-editor/commit/059c0056c4e9d3ef7f247e3ed19c3c02fd84b65f))
* **editor:** 组件树中将容器拖入自身中会导致容器丢失 ([16d4eff](https://github.com/Tencent/tmagic-editor/commit/16d4eff3859923c44cb9662210538c5ff47d793d)), closes [#622](https://github.com/Tencent/tmagic-editor/issues/622)
* **editor:** 组件树右键菜单在组件树面板拖出时被面板遮挡 ([72a7c15](https://github.com/Tencent/tmagic-editor/commit/72a7c151e9d5f40393f94870d550a917adac41c8)), closes [#624](https://github.com/Tencent/tmagic-editor/issues/624)
* **stage:** 页面失焦时将alt键按下状态重置 ([96224b4](https://github.com/Tencent/tmagic-editor/commit/96224b4d9254b6584dd0bb48ae1acc144cc00783))


### Features

* **data-source:** 数据源新增setValue方法 ([8d111ea](https://github.com/Tencent/tmagic-editor/commit/8d111ea976c397e70b6040e034ed6f85a49bc4b3))
* **editor:** 优化编辑器左边栏拖出体验，需要拖出一定距离才行 ([b249563](https://github.com/Tencent/tmagic-editor/commit/b249563f9442023d66180f5396649277889cf69c))
* **editor:** 数据源选择器编辑按钮添加tooltip ([3fa21fd](https://github.com/Tencent/tmagic-editor/commit/3fa21fd3eb91882e40e84a59b8b5e541876b9c92))
* **editor:** 添加component-list slot，用于自定义组件列表 ([0bbf7c5](https://github.com/Tencent/tmagic-editor/commit/0bbf7c564394a56bb6c99572240bba23b4e2919d)), closes [#621](https://github.com/Tencent/tmagic-editor/issues/621)
* **editor:** 编辑器左边栏支持配置不可拖出，支持before-click函数配置 ([837daf6](https://github.com/Tencent/tmagic-editor/commit/837daf6cabcaa6110b99b020288097f25d8c05b9))



## [1.4.14](https://github.com/Tencent/tmagic-editor/compare/v1.4.13...v1.4.14) (2024-07-12)


### Bug Fixes

* **data-source:** 迭代条件条件组编译逻辑不对 ([1fc04b4](https://github.com/Tencent/tmagic-editor/commit/1fc04b44641df1c478fb6bf5236752e43ead830f))



## [1.4.13](https://github.com/Tencent/tmagic-editor/compare/v1.4.12...v1.4.13) (2024-07-04)


### Bug Fixes

* **data-source:** 按需加载数据源时需要分享数据源方法依赖 ([1e93e9b](https://github.com/Tencent/tmagic-editor/commit/1e93e9bacce4ec52c96b82c9af1433b6e1f17195))
* **editor:** 修复新增第一个显示条件时会重置表单状态 ([eb376b2](https://github.com/Tencent/tmagic-editor/commit/eb376b261baa0dd6bee1f63c02c4d52fbf93cb41))



## [1.4.12](https://github.com/Tencent/tmagic-editor/compare/v1.4.11...v1.4.12) (2024-07-02)


### Bug Fixes

* **dep:** 数据源源方法依赖收集，数据源类内定义的方法需要被收集 ([c8870c5](https://github.com/Tencent/tmagic-editor/commit/c8870c5c129736c85fb005191501efd6a60665bb))
* **editor:** 更新容器后，需要将容器内的依赖重新收集 ([aabca93](https://github.com/Tencent/tmagic-editor/commit/aabca93c27a73baf051c4d650224e09553b28f8f))



## [1.4.11](https://github.com/Tencent/tmagic-editor/compare/v1.4.10...v1.4.11) (2024-07-02)


### Bug Fixes

* **editor:** 迭代器容器子项条件配置中值输入类型 ([022c10f](https://github.com/Tencent/tmagic-editor/commit/022c10f2df9bc8ac904487ac9bc7b431873b8588))
* **form:** 修复 grouplist 添加项时没有调用 changeHandler 的问题 ([c089ada](https://github.com/Tencent/tmagic-editor/commit/c089adae9e377d49d62adec23394e32a737cbb6e))


### Features

* **data-source:** 迭代器容器内容支持显示条件配置 ([ecfaff2](https://github.com/Tencent/tmagic-editor/commit/ecfaff2e0d4a14e41cf7fe4f2cc51377da401f52))([882d222](https://github.com/Tencent/tmagic-editor/commit/882d222800c532dd70f343f1b5b13c994d02551c))
* **editor:** 优化数据源字段选择器交互 ([ef04fd3](https://github.com/Tencent/tmagic-editor/commit/ef04fd31f0a348070c5e42b5c7c5caa724066b21)) ([6cdeaa0](https://github.com/Tencent/tmagic-editor/commit/6cdeaa0c1bd8b5c379153dd32136e4244c7e2a2b))



## [1.4.10](https://github.com/Tencent/tmagic-editor/compare/v1.4.9...v1.4.10) (2024-06-28)


### Bug Fixes

* **form,design:** 支持行内表单 ([77f13fa](https://github.com/Tencent/tmagic-editor/commit/77f13fa8981c16e9596856e46c8397adee7cf51a))
* **stage:** 标尺销毁后没有移除对应的dom ([0796799](https://github.com/Tencent/tmagic-editor/commit/079679997aed97bb28c8dc03f53565be93abf3fe)), closes [#617](https://github.com/Tencent/tmagic-editor/issues/617)


### Features

* **dats-source,editor,form,schema,ui:** 迭代器容器支持配置子项显示条件 ([a164e2b](https://github.com/Tencent/tmagic-editor/commit/a164e2be62a34bbf4a9896becd738adf72dd2fd4))
* **editor:** 优化数据源字段选择器交互 ([0ffc223](https://github.com/Tencent/tmagic-editor/commit/0ffc223459c9aee06ba557d13e79f8f21087f726))
* **editor:** 支持拖拽调整页面顺序 ([0c5485b](https://github.com/Tencent/tmagic-editor/commit/0c5485b1d0c073e19f142e88574f086e695e77c9))



## [1.4.9](https://github.com/Tencent/tmagic-editor/compare/v1.4.8...v1.4.9) (2024-06-17)



## [1.4.8](https://github.com/Tencent/tmagic-editor/compare/v1.4.7...v1.4.8) (2024-06-17)


### Bug Fixes

* **data-source:** 兼容Promise.allSettled ([7ee7f53](https://github.com/Tencent/tmagic-editor/commit/7ee7f53938c99a47631b5fe1835a13c4bed4c3ed))
* **data-source:** 多页面时数据源依赖中可能包含其他页面的，导致更新时失败 ([5c43fbf](https://github.com/Tencent/tmagic-editor/commit/5c43fbfd964897a373d29d7e9e60713f1f2209a2))
* **data-source:** 默认事件处理支持path为空字符串 ([ac7bb93](https://github.com/Tencent/tmagic-editor/commit/ac7bb93a3795d196a201cef93881027bddca2156))
* **editor,runtime:** 编辑器中，依赖收集改成异步以后，可能出现配置更新了，但是依赖信息还未更新，导致渲染出来的组件不对 ([78e9a0a](https://github.com/Tencent/tmagic-editor/commit/78e9a0ab15d2f68a89f0670818fe77bb81362276))
* **runtime:** 使用vue-demi cdn ([0cd8382](https://github.com/Tencent/tmagic-editor/commit/0cd83825b783ae54dc9e34868032a4230fb5a6e3))
* **ui:** overlay销毁需要异常page上的事件 ([094635c](https://github.com/Tencent/tmagic-editor/commit/094635cc0eaa71d1130089c0326bec2a4c62d3a5))
* **vue-runtime-help:** inject app 无效 ([aa25aa6](https://github.com/Tencent/tmagic-editor/commit/aa25aa6d854f6daf08abb554e490d4a0d21cad8b))


### Features

* **editor:** 支持数据源模板输入宽选中文本后编辑（在有数据源变量时还有问题） ([a30e8a3](https://github.com/Tencent/tmagic-editor/commit/a30e8a3eeaf61168eebe1d46cb02b2473228e3e2))
* **editor:** 组件树中支持多选拖动 ([5ac768f](https://github.com/Tencent/tmagic-editor/commit/5ac768f15be33526dcbec4a69f969e9dcf36cbc5))
* **editor:** 组件表单配置支持函数 ([9eb99ed](https://github.com/Tencent/tmagic-editor/commit/9eb99ed1768def2817718da3e54d4e8424ee0aaf))
* **ui,runtime:** vue-runtime-help中添加use-app方法 ([948c194](https://github.com/Tencent/tmagic-editor/commit/948c194a601ec7dbbf433c8165d5bc266e8cc175))



## [1.4.7](https://github.com/Tencent/tmagic-editor/compare/v1.4.6...v1.4.7) (2024-05-31)


### Bug Fixes

* **editor:** 修复pad大屏模式下粘贴位置计算错误偏移问题 ([#612](https://github.com/Tencent/tmagic-editor/issues/612)) ([d98029d](https://github.com/Tencent/tmagic-editor/commit/d98029d5e79c2579bf106d5670c74ad520c17267))
* **editor:** 已选组件树中如果出现items不是数组会导致节点渲染失败 ([7fb4d96](https://github.com/Tencent/tmagic-editor/commit/7fb4d96cb0c66a8f4c1010764ec2f986abec1cf4))
* **editor:** 数据源模板输入框输入数字索引后浏览器卡死 ([a66da8d](https://github.com/Tencent/tmagic-editor/commit/a66da8de9e40b76bc6415e0aea6556e07bddf163)), closes [#611](https://github.com/Tencent/tmagic-editor/issues/611)
* **playground:** tmagic-form样式丢失 ([49e9d5b](https://github.com/Tencent/tmagic-editor/commit/49e9d5b9856dc4e7bd59ef383b9f52b6529db70c)), closes [#610](https://github.com/Tencent/tmagic-editor/issues/610)
* **ui,runtime:** 迭代器容器迭代数据兼容 ([94db430](https://github.com/Tencent/tmagic-editor/commit/94db430b85e85a98db5eea3f88b490c8c22ed235)), closes [#613](https://github.com/Tencent/tmagic-editor/issues/613)


### Features

* **core,editor,form:** 页面片容器支持配置容器内组件的事件 ([2d133f4](https://github.com/Tencent/tmagic-editor/commit/2d133f47f13d8d3ea557e0b14028588cf37884b0))
* **dep,editor,data-source,schema:** 优化编辑器中依赖收集性能 ([ee26991](https://github.com/Tencent/tmagic-editor/commit/ee269917f8acd7d32a124bc090ba38192e2c8d92))
* **editor:** 复制组件时收集依赖性能优化改造 ([cd191f6](https://github.com/Tencent/tmagic-editor/commit/cd191f68154e63c0eaceed4e2bd695d4fa25e013))
* **playground:** 设置配置表单的label-width ([50d238a](https://github.com/Tencent/tmagic-editor/commit/50d238a48cf99961498effb3dc0dc815797d4da9))


### Reverts

* Revert "build: 发布时在更版本号后执行reinstall来生成新lock" ([4670ada](https://github.com/Tencent/tmagic-editor/commit/4670adadc005faa658e632ff2245629fbfda76a8))



## [1.4.6](https://github.com/Tencent/tmagic-editor/compare/v1.4.5...v1.4.6) (2024-05-27)


### Bug Fixes

* **editor:** stageOverlay不应受编辑器zoom影响 ([47c4222](https://github.com/Tencent/tmagic-editor/commit/47c42222b317a4a62ba1bbc3e496e5eef085dd0d))
* **runtime:react:** update page时出错 ([af3f621](https://github.com/Tencent/tmagic-editor/commit/af3f621424cd472c72b54bcdfbed3a4ccc91fd5e))
* **runtime:** vue runtime App组件中缺失inject ([15e9cdc](https://github.com/Tencent/tmagic-editor/commit/15e9cdc2d6255bb9fe5b9924ab79405ba9c95465))


### Features

* **editor,dep:** 支持复制组件时将组件绑定的数据源一并复制 ([faabf1b](https://github.com/Tencent/tmagic-editor/commit/faabf1bb3ad77b6b09498bb7512e3f2d1a7f0a76))
* **editor:** export FloatingBox ([5ce099c](https://github.com/Tencent/tmagic-editor/commit/5ce099c11d02eb564ce7575922c3f2419d2322df))
* **runtime:** vue2/vue3公共部分提出到vue-runtime-help中 ([f8dd062](https://github.com/Tencent/tmagic-editor/commit/f8dd062a502766579c6a59df642b89b075a68c1f))



## [1.4.5](https://github.com/Tencent/tmagic-editor/compare/v1.4.4...v1.4.5) (2024-05-20)


### Bug Fixes

* **core,data-source:** 事件参数中关联数据源字段无法自动更新 ([c665bf3](https://github.com/Tencent/tmagic-editor/commit/c665bf3ccc7627f134efb5fe7bc7f53c88ec338c))
* **editor,stage,utils:** 修复在ipad等大屏场景下编辑画布中元素位置计算偏差问题 ([#598](https://github.com/Tencent/tmagic-editor/issues/598)) ([e39a7d1](https://github.com/Tencent/tmagic-editor/commit/e39a7d140fef9bc00376b84910a78b04b277fae7))
* **form:** select option label不生效 ([9034cef](https://github.com/Tencent/tmagic-editor/commit/9034cef0d21626472f0b6618aaa5f5355019b9ed))
* **form:** select option 在没有adapter的时候默认使用el-option ([ad2146f](https://github.com/Tencent/tmagic-editor/commit/ad2146f3bd4df4720bf86fef14e33f1dbbd355de))


### Features

* **data-source:** manager init 事件增加error数据 ([708d3db](https://github.com/Tencent/tmagic-editor/commit/708d3db4bbeb2b2512d5c85919b1e738dc55da83))
* 支持数据源事件 ([#605](https://github.com/Tencent/tmagic-editor/issues/605)) ([88c04c6](https://github.com/Tencent/tmagic-editor/commit/88c04c6dac6ada5bacf30b33b6ed0a7649020fa2))



## [1.4.4](https://github.com/Tencent/tmagic-editor/compare/v1.4.3...v1.4.4) (2024-04-16)


### Bug Fixes

* **editor:** floating-box高度无法改变 ([872c978](https://github.com/Tencent/tmagic-editor/commit/872c978b9b471e8e1bc2f42d8ce0865def159950))
* **editor:** 在组件属性配置表单中编辑数据源方法无法保存问题 ([b1e79c1](https://github.com/Tencent/tmagic-editor/commit/b1e79c1e05a164c057a53ac9d895ae744bd1cb5a))
* **playground:** 画布尺寸切换无效 ([3af247f](https://github.com/Tencent/tmagic-editor/commit/3af247febb58d0a042c6735c56fd8b7d5c445fe8)), closes [#586](https://github.com/Tencent/tmagic-editor/issues/586)
* **runtime:** 更新page后，在编辑器中无法打开蒙层 ([69c555f](https://github.com/Tencent/tmagic-editor/commit/69c555f567e09f872501f024080a12fc3192bf7c)), closes [#587](https://github.com/Tencent/tmagic-editor/issues/587)


### Features

* **cli,data-source,runtime:** 数据源支持动态按需加载 ([0061331](https://github.com/Tencent/tmagic-editor/commit/006133102fbb1e18306a18f77cbafa65f57302fa))
* **editor:** 优化数据源选择器与代码选择的编辑按钮 ([fc1a7a0](https://github.com/Tencent/tmagic-editor/commit/fc1a7a09fffb90f65616ffbbe72fc11561d8f8ee))
* **editor:** 支持配置左侧边栏tab style ([4054c6e](https://github.com/Tencent/tmagic-editor/commit/4054c6ed572c43e879fa59ad9b60d02f63cbc17d))
* **editor:** 新增配置控制属性配置面板右下角的源码按钮是否显示 ([92049cf](https://github.com/Tencent/tmagic-editor/commit/92049cf2516834632eebf639e90a87f568111276))



## [1.4.3](https://github.com/Tencent/tmagic-editor/compare/v1.4.2...v1.4.3) (2024-03-29)


### Bug Fixes

* **data-source,dep,utils:** 迭代器数据源配置编译 ([0e0f501](https://github.com/Tencent/tmagic-editor/commit/0e0f50187ee3409dcc03c69171e7ec71b5515abd))
* **editor:** 数据源字段选择器初始化状态 ([05527a4](https://github.com/Tencent/tmagic-editor/commit/05527a41a1c063b16714f374d0b9c953fa9d8a2d))


### Features

* **playground:** 缓存上次保存dsl ([47b19ae](https://github.com/Tencent/tmagic-editor/commit/47b19ae7fa43fb03608e8f7380b8c69cd50d68f0))



## [1.4.2](https://github.com/Tencent/tmagic-editor/compare/v1.4.1...v1.4.2) (2024-03-26)


### Bug Fixes

* **editor:** element-plus更新到2.6后表单项清除后是undefined，改回是空字符串 ([ceff0d4](https://github.com/Tencent/tmagic-editor/commit/ceff0d41472efb04d58f0b477c4a63fb37c7a122))
* **editor:** element-plus更新到2.6后表单项清除后是undefined，除了string外其他统一改成null ([a4fc957](https://github.com/Tencent/tmagic-editor/commit/a4fc95775eab88ecb5850f824ae5bf7889e951e4))
* **editor:** 代码块配置表单项大小不受配置控制 ([f92127e](https://github.com/Tencent/tmagic-editor/commit/f92127e3d6a597413d3c3832ba2f1e6a993f0b3b))
* **editor:** 初始化时如果浏览器切到后台编辑器列宽度计算出问题 ([7049b1f](https://github.com/Tencent/tmagic-editor/commit/7049b1ff45c3bd2c70c39c1451b505fcaf2639bf))
* **form:** select 支持tdesign-vue-next ([15b88c9](https://github.com/Tencent/tmagic-editor/commit/15b88c97fc289c349467cf524b4becc44646ca2a)), closes [#584](https://github.com/Tencent/tmagic-editor/issues/584)


### Features

* **data-srouce:** manager新增init事件 ([9343989](https://github.com/Tencent/tmagic-editor/commit/934398911d7f9dc4ac9fc9c2b56ef4d158d06611))
* **editor:** 数据源字段选择器增加编辑按钮 ([66e1645](https://github.com/Tencent/tmagic-editor/commit/66e16452a89bf8aa8dec4faaf73efd1df87cd04e))



## [1.4.1](https://github.com/Tencent/tmagic-editor/compare/v1.4.0...v1.4.1) (2024-03-22)


### Bug Fixes

* **design:** element-plus select中scrollbar变量名改变 ([6ccd8bb](https://github.com/Tencent/tmagic-editor/commit/6ccd8bb06bf04aa4a5c5ccabe4266d0f572711e8))
* **editor:** 数据源列表搜索过滤无响应问题 ([#582](https://github.com/Tencent/tmagic-editor/issues/582)) ([b564907](https://github.com/Tencent/tmagic-editor/commit/b564907b12d97caee1a944c9251ede7abbea7694))



# [1.4.0](https://github.com/Tencent/tmagic-editor/compare/v1.4.0-beta.2...v1.4.0) (2024-03-19)


### Features

* **editor:** 数据源抽屉切floatbox ([96149bd](https://github.com/Tencent/tmagic-editor/commit/96149bd2ae0f7ec2bcee381f60dbd3c495705b9e))
* **runtime, utils:** Fix issue [#503](https://github.com/Tencent/tmagic-editor/issues/503), setPage实现跳转页面 ([#581](https://github.com/Tencent/tmagic-editor/issues/581)) ([0c746aa](https://github.com/Tencent/tmagic-editor/commit/0c746aa3d97cdb28531408bb0e89564f4b567186))
* 完善tdesign-vue-next适配 ([92b7a2a](https://github.com/Tencent/tmagic-editor/commit/92b7a2aecfb3d0bb0f2674aded9f6c225487c102))



# [1.4.0-beta.2](https://github.com/Tencent/tmagic-editor/compare/v1.4.0-beta.1...v1.4.0-beta.2) (2024-03-18)


### Bug Fixes

* **editor:** 修复直接关闭代码块编辑窗口告警 ([62e7888](https://github.com/Tencent/tmagic-editor/commit/62e7888fcfcac2e1e4610e7edb59ba329e5b9c93))
* **editor:** 修复第一次打开编辑器左右边栏宽度可能为0问题 ([36a1a18](https://github.com/Tencent/tmagic-editor/commit/36a1a18615ac29fc4448ee2498d51ece51fe8dbd))
* **editor:** 拖动浮动窗口会导致窗口变大 ([42f1f28](https://github.com/Tencent/tmagic-editor/commit/42f1f28b02fa274d201fa6d945f88129b465aac5))


### Features

* **editor:** 优化代码块编辑弹窗 ([c83e76e](https://github.com/Tencent/tmagic-editor/commit/c83e76e641476c5e7222db15e5e36aa4a453e389))
* **editor:** 属性面板支持切换源码 ([de1711d](https://github.com/Tencent/tmagic-editor/commit/de1711d7133cd4dcf19c2c868ff21b03c02f6a11))
* **stage,editor:** 选中的元素不存在时不报错,并完善事件ts定义 ([fff56a9](https://github.com/Tencent/tmagic-editor/commit/fff56a97f7403009be377841c8a05cd7b7a583de)), closes [#579](https://github.com/Tencent/tmagic-editor/issues/579)



# [1.4.0-beta.1](https://github.com/Tencent/tmagic-editor/compare/v1.3.16...v1.4.0-beta.1) (2024-03-13)


### Bug Fixes

* **design:** Autocomplete default slot 名称拼写错误 ([94a6004](https://github.com/Tencent/tmagic-editor/commit/94a6004608a8cd618c6f150cba7fe8076412df31))
* **editor:** 修复点击floatbox时更新zindex导致宽高被重置的问题 ([cae928f](https://github.com/Tencent/tmagic-editor/commit/cae928f7f90a3e2d52b866400ab5ce46da90cec6))
* **editor:** 修复高级中打开代码块没有floatbox嵌套的问题，floatbox支持beforeClose事件 ([5fc6496](https://github.com/Tencent/tmagic-editor/commit/5fc649607aa4ac522b0d783973104fec39bf5021))
* **editor:** 设置配置时使用的key统一转换成kebab-cased形式 ([8e18336](https://github.com/Tencent/tmagic-editor/commit/8e18336fa3acebb2d144733a1173d63d30a00d48)), closes [#576](https://github.com/Tencent/tmagic-editor/issues/576)
* **stage:** 修复moveable中custom able旋转中心错误问题 ([#575](https://github.com/Tencent/tmagic-editor/issues/575)) ([842fa22](https://github.com/Tencent/tmagic-editor/commit/842fa221aacd4e1e76a5ce083984c4c2ea2458a0))
* **stage:** 多选后拖动没有响应 ([5cf137e](https://github.com/Tencent/tmagic-editor/commit/5cf137e5e811182f34e66ea16ba65f677489414d))


### Features

* **data-source,runtime:** 数据源编译组件时新增一个参数控制是否要编辑子元素 ([c68d4e0](https://github.com/Tencent/tmagic-editor/commit/c68d4e05de3baa3b6cf1f842d228059a5af75371))
* **design,form:** cascader新增popper-class prop ([6dbac52](https://github.com/Tencent/tmagic-editor/commit/6dbac52c50fb3447b3c3fd2c9a6a138d4b0fb91c))
* **editor:** props-service支持通过fill-config设置label-width ([0315389](https://github.com/Tencent/tmagic-editor/commit/0315389ce935d350fc0cc9848d50cc7e35d34be1))
* **editor:** 使用 floatbox 替换原抽屉栏 ([a035f02](https://github.com/Tencent/tmagic-editor/commit/a035f02f839032774c6698bc10cc163585faeb1e))
* **editor:** 增加FloatBox的beforeClose函数 ([7ce60b2](https://github.com/Tencent/tmagic-editor/commit/7ce60b223e124ac21d8da56480a35dcca97231d9))
* **editor:** 样式配置支持配置数据源字段 ([cda6c0f](https://github.com/Tencent/tmagic-editor/commit/cda6c0f79108c72ebc1e6924ca0c929d50fb4ccb))
* **form:** label 标签的title属性配置 ([e272370](https://github.com/Tencent/tmagic-editor/commit/e272370fea5c227497decdc04381101afa11cce8))
* 支持迭代器容器 ([e692e01](https://github.com/Tencent/tmagic-editor/commit/e692e01c4f736abcc2a4e7262dfc9179d8b1a6fb))



## [1.3.16](https://github.com/Tencent/tmagic-editor/compare/v1.3.15...v1.3.16) (2024-03-01)


### Bug Fixes

* **design,editor,tdesign-vue-next-adapter:** tMagicPopover在TDesign下异常 ([ffc3e57](https://github.com/Tencent/tmagic-editor/commit/ffc3e57aa1ac2f2aad2a0f6451cf8719b32269cd)), closes [#574](https://github.com/Tencent/tmagic-editor/issues/574)
* **tmagic-form-runtime:** useRuntime添加默认参数 ([1b3c598](https://github.com/Tencent/tmagic-editor/commit/1b3c598a663499491e1ee44792771ea3703753b3))


### Features

* **editor:** 新增code-block-panel-search slot ([a073b8c](https://github.com/Tencent/tmagic-editor/commit/a073b8c50d0e8b90d9bf8099ed8482cbb42e4709))
* **editor:** 新增data-source-panel-search slot ([6821ce5](https://github.com/Tencent/tmagic-editor/commit/6821ce5fbfba80a3ae2e36e46b707863d2ec0af3))



## [1.3.15](https://github.com/Tencent/tmagic-editor/compare/v1.3.14...v1.3.15) (2024-02-29)


### Bug Fixes

* **runtime:** 数据源变化更新页面出错 ([0df98bc](https://github.com/Tencent/tmagic-editor/commit/0df98bc226396cfc924afde1768e7707f789dd19))


### Features

* **editor:** 代码选择器，数据源方法选择新增不可编辑配置，与disabled区分开 ([58b62d1](https://github.com/Tencent/tmagic-editor/commit/58b62d18e4874b5a1214bc0717ebe090e4fbf489))



## [1.3.14](https://github.com/Tencent/tmagic-editor/compare/v1.3.13...v1.3.14) (2024-02-29)


### Bug Fixes

* **data-source, ui:** 页面配置配置数据源字段模块出错 ([455c696](https://github.com/Tencent/tmagic-editor/commit/455c696ff0e871d6513473c74202b6c3b8fc8b40))
* **editor:** 从页面切换成页面片时不会默认选中第一个页面片 ([3fe83f9](https://github.com/Tencent/tmagic-editor/commit/3fe83f9fa49676cc89e9f2d799d0fbe3fd7f2ec6))
* **editor:** 复制页面后，组件树选中状态不对 ([b4df7f5](https://github.com/Tencent/tmagic-editor/commit/b4df7f5eea5724b8c3d656f6885bfc3b78910f0a))
* **tmagic-form-runtime:** 完善form-runtime ([8d1ba22](https://github.com/Tencent/tmagic-editor/commit/8d1ba220c1685f993d8bdffaaa9f053e1b02df0b))
* **utils:** 数据源条件解析空字符出错 ([33fcee6](https://github.com/Tencent/tmagic-editor/commit/33fcee66dfbf7fb95f4784e7a290caad2b375845))


### Features

* **editor,core,schema:** 组件高级配置支持配置数据源方法 ([074d764](https://github.com/Tencent/tmagic-editor/commit/074d76456b5fa35684d1db7ea12107c1b145dec0))
* **editor:** menu配置支持事件 ([fcede5c](https://github.com/Tencent/tmagic-editor/commit/fcede5c0aceeb32851e129111d5aa690de1a7d1b))



## [1.3.13](https://github.com/Tencent/tmagic-editor/compare/v1.3.12...v1.3.13) (2024-01-19)


### Bug Fixes

* **editor:** stage-overlay状态更新 ([2432bc5](https://github.com/Tencent/tmagic-editor/commit/2432bc5a6931b95434a0711f4f67f540b8b9c9c3))
* **editor:** 弹层画布响应组件树点击 ([2114b89](https://github.com/Tencent/tmagic-editor/commit/2114b89365bdb889b14264799d23ae7b5b6ca39a))
* **stage:** scrollIntoView不能有横向滚动 ([01f8040](https://github.com/Tencent/tmagic-editor/commit/01f8040a1a24da463f1d2b22dca8022f86424cb0))



## [1.3.12](https://github.com/Tencent/tmagic-editor/compare/v1.3.11...v1.3.12) (2024-01-18)


### Bug Fixes

* **editor:** 移动元素到容器中的时候root没有更新问题 ([#569](https://github.com/Tencent/tmagic-editor/issues/569)) ([edc7c11](https://github.com/Tencent/tmagic-editor/commit/edc7c119291253dfc747005be7f607104263c1ed))


### Features

* **editor,stage:** 完善双击画布可以已弹层方向显示并显示完整的组件 ([c30e7d3](https://github.com/Tencent/tmagic-editor/commit/c30e7d340b4ec58de3edd7d3f3a8db5ac8b7e07d))



## [1.3.11](https://github.com/Tencent/tmagic-editor/compare/v1.3.10...v1.3.11) (2024-01-12)


### Bug Fixes

* **editor:** 拖动组件进画布后，父容器位置计算有误 ([#565](https://github.com/Tencent/tmagic-editor/issues/565)) ([115123a](https://github.com/Tencent/tmagic-editor/commit/115123a0bcd1d63f53eeb23361547e1985241b67))


### Features

* **editor,stage:** 双击画布可以已弹层方向显示并显示完整的组件 ([e4af8ca](https://github.com/Tencent/tmagic-editor/commit/e4af8cadb04f23669c0762993052b13a5422afac))



## [1.3.10](https://github.com/Tencent/tmagic-editor/compare/v1.3.9...v1.3.10) (2024-01-10)


### Bug Fixes

* **form:** table全屏后zindex问题 ([aa601f8](https://github.com/Tencent/tmagic-editor/commit/aa601f8703acc097b072d7b2c20e6ab0eb7010ab))
* **runtime:** 更新Vue3 cdn链接 ([84cbc74](https://github.com/Tencent/tmagic-editor/commit/84cbc745c7a11d0220c6f2a8b415426a1167df59))
* **utils:** <=条件编译出错 ([acab44a](https://github.com/Tencent/tmagic-editor/commit/acab44aaa4c80f7f046f738d63791e7a1dfd055d))


### Features

* **design,element-plus-adapter:** 新增获取浮层zIndex的方法 ([81e3d0a](https://github.com/Tencent/tmagic-editor/commit/81e3d0a18eac05b29838d39ee237000d2120f49d))
* 新增tmagic-form-runtime ([f8443ed](https://github.com/Tencent/tmagic-editor/commit/f8443ed3161020ffb25aee326b24bf8eda57582e))
* 输入文本含有空格时,弹窗提示 ([ab5e31d](https://github.com/Tencent/tmagic-editor/commit/ab5e31dfea348bb970c87b5f41ca378e22dfb7f2))



## [1.3.9](https://github.com/Tencent/tmagic-editor/compare/v1.3.8...v1.3.9) (2024-01-03)


### Bug Fixes

* **editor:** 上下移一层溢出 ([2326962](https://github.com/Tencent/tmagic-editor/commit/23269625e12bb853392f2a140a6a9b4999d57c46)), closes [#563](https://github.com/Tencent/tmagic-editor/issues/563)
* **stage:** 有margin的组件拖动大小时top偏移 ([3204204](https://github.com/Tencent/tmagic-editor/commit/320420478cce8df6f27e90920abc6fe8a89639dc)), closes [#559](https://github.com/Tencent/tmagic-editor/issues/559)
* **stage:** 组件添加粗一点的边框后resize操作 选中样式没有和组件本身对齐 ([783f7c3](https://github.com/Tencent/tmagic-editor/commit/783f7c3fc1349182b280c847f666dd88c9bc7760)), closes [#562](https://github.com/Tencent/tmagic-editor/issues/562)


### Features

* **data-source,utils,runtime:** 数据源setData支持指定路径 ([d3777b2](https://github.com/Tencent/tmagic-editor/commit/d3777b236d85c091a2ab1e83d7dc3616e72a465e))
* 代码编辑器支持emmet插件 --story=115432867 ([6b4bfae](https://github.com/Tencent/tmagic-editor/commit/6b4bfae30b9541b7d965fa139f9b1097faaeb921))



## [1.3.8](https://github.com/Tencent/tmagic-editor/compare/v1.3.7...v1.3.8) (2023-12-21)


### Features

* **editor,dep:** watcher新增方法:清除指定类型的依赖 ([d981014](https://github.com/Tencent/tmagic-editor/commit/d981014160625ce4bafad52428862cc070e5c604))
* **editor,form:** 新增属性配置表单error事件 ([fbe1d88](https://github.com/Tencent/tmagic-editor/commit/fbe1d88d27bcaf53ea606706c2526fa5436e7e78)), closes [#557](https://github.com/Tencent/tmagic-editor/issues/557)
* **editor,ui:** 页面片下拉选择框支持点击跳转编辑,修改页面片组件initvalue ([2dc810a](https://github.com/Tencent/tmagic-editor/commit/2dc810a9fd15ed9fe730d3d6046ed8addc68da9d))
* **editor:** data-source-service支持扩展 ([bd8bbc6](https://github.com/Tencent/tmagic-editor/commit/bd8bbc6154c22c59d8c10cb56a2390498cbe41e3))
* **editor:** 新增page-bar slot ([7c90b93](https://github.com/Tencent/tmagic-editor/commit/7c90b9339dbd262e3023083543d46a45c017aaca))
* **form:** table 增加 beforeAddRow 钩子函数校验是否可增加行 ([2dcef44](https://github.com/Tencent/tmagic-editor/commit/2dcef449bfe04c7cb38223c1025d1ecb8df0074e))



## [1.3.7](https://github.com/Tencent/tmagic-editor/compare/v1.3.6...v1.3.7) (2023-12-19)


### Bug Fixes

* **form:** table全屏后蒙层在最上一层 ([4ec0b69](https://github.com/Tencent/tmagic-editor/commit/4ec0b69a8dc8168c6e3393094f8366dfe81d7298))


### Features

* **core,editor,ui:** 新增页面片 ([7b6dced](https://github.com/Tencent/tmagic-editor/commit/7b6dcedfad07af458d2496b69230fe2920dead70))
* **data-source:** 支持在指定js环境下不执行init的配置 ([86bdb9f](https://github.com/Tencent/tmagic-editor/commit/86bdb9f0990a9ae1a774729c4aa7f2e92ab70d13))
* **editor, stage:** 初始化加载runtime loading ([7305f87](https://github.com/Tencent/tmagic-editor/commit/7305f878f341ea8531f4075cb23e27a75590029b))
* **editor, stage:** 新增禁用多选的props ([2a5b9ec](https://github.com/Tencent/tmagic-editor/commit/2a5b9ec6bd23d3e859b8783102e5366182bf9463))
* **editor,stage:** 新增标尺配置props ([f212be1](https://github.com/Tencent/tmagic-editor/commit/f212be136e140f1d3b568b22cce01d2801b12157)), closes [#558](https://github.com/Tencent/tmagic-editor/issues/558)
* **editor:** 右键菜单兼容页面片 ([41a3b8c](https://github.com/Tencent/tmagic-editor/commit/41a3b8c7c7469cf1246689b24084eb0e8b0eb8cf))
* **editor:** 新增自定义右键菜单函数配置 ([698c345](https://github.com/Tencent/tmagic-editor/commit/698c3451ff85bfdb07310fa001253943c9a7f8e8))
* **playground:** 完善form editor ([538f96c](https://github.com/Tencent/tmagic-editor/commit/538f96c0825e3d5d3fb26783bb0bac0ddbcbcceb))


### Reverts

* Revert "chore: 去掉pnpm的限制" ([04a72da](https://github.com/Tencent/tmagic-editor/commit/04a72da06ce84d00a184a67e4eff907c41b08639))



## [1.3.6](https://github.com/Tencent/tmagic-editor/compare/v1.3.5...v1.3.6) (2023-12-12)


### Bug Fixes

* **data-source,utils:** 显示条件编译对于undefined理解不正确 ([75dd89f](https://github.com/Tencent/tmagic-editor/commit/75dd89f2fe560f9bfcad8d0aa3afc481cdf42286))
* **dep:** get-tagert需要指定type ([70f2b11](https://github.com/Tencent/tmagic-editor/commit/70f2b11df50cd8ebbc58e96b1f0e2c87e7d6db84))
* **editor:** 新增数据源方法不会收集依赖 ([fe26ac5](https://github.com/Tencent/tmagic-editor/commit/fe26ac5ffc39da1449fd1c54af48a0ad8ba24491))
* **editor:** 有复制的内容时展示粘贴菜单 ([456692f](https://github.com/Tencent/tmagic-editor/commit/456692ff8ab2959519c6c858cd0098b06188560c))
* **form:** cascader options不会自动更新 ([cc202d7](https://github.com/Tencent/tmagic-editor/commit/cc202d79f9e76853e19177bb889e4cb7517514ec))
* **table:** 修复element table tooltip position 默认使用 fixed 定位导致气泡偏移的问题 ([0c994f1](https://github.com/Tencent/tmagic-editor/commit/0c994f1e230127aa27bb222ad201e096a86e05ad))


### Features

* **editor,stage:** 优化可选组件交互 ([258d2bc](https://github.com/Tencent/tmagic-editor/commit/258d2bc2eaa587c8f86fa2193b9740f9648a2705))
* **editor:** propsService.setNewItemId新增force参数 ([a9d794d](https://github.com/Tencent/tmagic-editor/commit/a9d794dc19f80d760459c8cf6b4636f48016c258))
* **editor:** service扩展支持设置成同步的 ([5c6a345](https://github.com/Tencent/tmagic-editor/commit/5c6a3455b039383dc78eaf1f08fb3ac7d53c379d))
* **editor:** 修改code-block-list code-block-panel-tool slot data ([268ec4c](https://github.com/Tencent/tmagic-editor/commit/268ec4c27a9a1dacc68edd93b5e1ff6aae72c300))
* **editor:** 可选组件按钮只有在可选组件长度大于3时才显示 ([e50e332](https://github.com/Tencent/tmagic-editor/commit/e50e332818dbe44f33489167aa5be4e42196e82a))
* **playground:** 新增表单编辑器 ([cf72039](https://github.com/Tencent/tmagic-editor/commit/cf72039ff149f5563cd018dcc572b9a6af38c007))
* **stage, editor:** runtime支持直接渲染模式不用iframe ([ba2f1e5](https://github.com/Tencent/tmagic-editor/commit/ba2f1e5ac5b71ece1d61aec81b84adf166ab063e))



## [1.3.5](https://github.com/Tencent/tmagic-editor/compare/v1.3.4...v1.3.5) (2023-12-01)


### Bug Fixes

* **data-source:** 数据源初始化 ([78762b9](https://github.com/Tencent/tmagic-editor/commit/78762b920e0315b16b43a5f3f67a5bb02d52c849))



## [1.3.4](https://github.com/Tencent/tmagic-editor/compare/v1.3.3...v1.3.4) (2023-11-28)


### Bug Fixes

* **editor:** 从组件树中拖入画布新增的情况如果初始position为fixed不改变布局 ([b0fcafd](https://github.com/Tencent/tmagic-editor/commit/b0fcafd089c23126a87fda00f6fdcd6b63bb8b82))
* **editor:** 修改根节点不添加历史记录 ([c9aab11](https://github.com/Tencent/tmagic-editor/commit/c9aab11e0352b7cc2518d113eb1960693bc64e98))
* **util:** 条件编译对应is与not实现对应value为false的情况出错 ([33c8f8b](https://github.com/Tencent/tmagic-editor/commit/33c8f8bf5a43fc55d5bd6ccc616dcb22a1ce2be2))


### Features

* **editor:** http数据源请求体配置支持写json ([141e1c7](https://github.com/Tencent/tmagic-editor/commit/141e1c7130b66d9e6ce16428b7282fdcda5ac53b))
* **editor:** 数据源数据定义快速添加支持与已有数据合并 ([6299d28](https://github.com/Tencent/tmagic-editor/commit/6299d286ba07f5661f3d477b3d6fc1ad913a40ea))
* **editor:** 画布大小支持配置百分比 ([eb43deb](https://github.com/Tencent/tmagic-editor/commit/eb43deb9f57c4b7afa8b2c53d4d694c6cb38604a))
* **stage:** 支持配置对齐元素 ([f8125aa](https://github.com/Tencent/tmagic-editor/commit/f8125aa1492aceceaef05330f8bfb1e96b280829))



## [1.3.3](https://github.com/Tencent/tmagic-editor/compare/v1.3.2...v1.3.3) (2023-11-21)


### Bug Fixes

* **dep:** 数据源依赖收集 ([5547eb4](https://github.com/Tencent/tmagic-editor/commit/5547eb4ee870d27fbeed8ed095c371dd8c341f74))


### Features

* **data-sources:** http数据裁剪函数content参数添加options ([5549e8c](https://github.com/Tencent/tmagic-editor/commit/5549e8cff9938ba205dcbf896d5c46db065db9ea))



## [1.3.2](https://github.com/Tencent/tmagic-editor/compare/v1.3.1...v1.3.2) (2023-11-21)


### Bug Fixes

* **dep:** 数据源依赖收集不收集单独的id，因为id不需要编译 ([eea8032](https://github.com/Tencent/tmagic-editor/commit/eea8032f0db1881961095802c4242fa7c0e2a232))
* **editor:** 不允许容器节点拖动到自己里面 ([fded262](https://github.com/Tencent/tmagic-editor/commit/fded26251f637a25dbd5af2a6ac2de55ccd06715)), closes [#553](https://github.com/Tencent/tmagic-editor/issues/553)
* **editor:** 修复slide 全部拖出来再关闭回去时不展示slide操作栏的问题 ([c80ea82](https://github.com/Tencent/tmagic-editor/commit/c80ea829ac54b76323f221f99d6655ad1a943239))
* **editor:** 更新dsl，组件树列表不更新 ([e35a963](https://github.com/Tencent/tmagic-editor/commit/e35a963b67cf279f01beb08e00cc678ab4e7d7ea)), closes [#554](https://github.com/Tencent/tmagic-editor/issues/554)


### Features

* **data-source:** 新增指定数据源的字符串模板编译 ([2e6d8af](https://github.com/Tencent/tmagic-editor/commit/2e6d8afb939cdc6ebd0a120e6bcdbc4190978678))
* **editor:** dataSourceService.add返回添加的数据源 ([ab02c2f](https://github.com/Tencent/tmagic-editor/commit/ab02c2f3ee7e97c0a64da627768447070acfc932))
* **editor:** 支持 slide 侧边栏可拖拽悬浮 ([2b10e7e](https://github.com/Tencent/tmagic-editor/commit/2b10e7eda90f3e30b75358d36b1e25ac0f5bc099))
* **editor:** 数据源选择器支持选择数据源id ([cdba8ae](https://github.com/Tencent/tmagic-editor/commit/cdba8aeaf2ec7b05c8e9ba9c767e5d3f00fb34e2))



## [1.3.1](https://github.com/Tencent/tmagic-editor/compare/v1.3.0...v1.3.1) (2023-11-15)


### Bug Fixes

* **editor:** 在组件树将组件拖入不同布局的容器内，需要改变其布局 ([ce0c941](https://github.com/Tencent/tmagic-editor/commit/ce0c941bf15987b01cf4949dea57313486768ed9)), closes [#552](https://github.com/Tencent/tmagic-editor/issues/552)
* **stage:** 当页面大小小于画布时，组件又处于画布边缘，moveable边框会超出画布，导致获取到画布外的元素 ([3b789f4](https://github.com/Tencent/tmagic-editor/commit/3b789f4d13e95b76881678b7cc55cf7bc68e7b8a)), closes [#546](https://github.com/Tencent/tmagic-editor/issues/546)
* **stage:** 设置margin后拖动位置出现漂移 ([7f6ba9d](https://github.com/Tencent/tmagic-editor/commit/7f6ba9de9967f07286e0c412211495f35f2d9649)), closes [#549](https://github.com/Tencent/tmagic-editor/issues/549)


### Features

* **core:** 将事件响应中的剩余事件参数传入到配置的代码块与数据源方法中 ([436fb3f](https://github.com/Tencent/tmagic-editor/commit/436fb3f5aa0fb3cc332e6e1d1ecb385579ff97f3)), closes [#551](https://github.com/Tencent/tmagic-editor/issues/551)
* **data-source:** 数据源支持ssr ([ffd8130](https://github.com/Tencent/tmagic-editor/commit/ffd8130269ea75a9a6ca1238336fd5e3385cd6c0))



# [1.3.0](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.8...v1.3.0) (2023-11-06)


### Bug Fixes

* **core:** 设置page时查找原page兼容数字id情况 ([168ec28](https://github.com/Tencent/tmagic-editor/commit/168ec281aaa6005498dd73de6f64739d67d66b1d)), closes [#547](https://github.com/Tencent/tmagic-editor/issues/547)
* **editor:** model-value变化后需要重新生成依赖后再通知runtime更新 ([f0f94d4](https://github.com/Tencent/tmagic-editor/commit/f0f94d4fcc451dc1d3e55ea2a3656d75592bd62e))
* **stage:** 隐藏标尺后再显示标尺，拖出来的线没有吸附作用 ([7a228b1](https://github.com/Tencent/tmagic-editor/commit/7a228b13e6d1137e29a24022e5b914c5813a7fd6)), closes [#548](https://github.com/Tencent/tmagic-editor/issues/548)



# [1.3.0-beta.8](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.7...v1.3.0-beta.8) (2023-11-03)


### Bug Fixes

* **editor:** 数据源列表中依赖的key会重复出现 ([2d5b772](https://github.com/Tencent/tmagic-editor/commit/2d5b7726efaff5032f01e4180126e801507b77cd))
* **editor:** 画布区域不允许宽度为0 ([1c3f8ab](https://github.com/Tencent/tmagic-editor/commit/1c3f8abaf4881bc7d5b206b1ccc3686a7226cfda))


### Features

* **editor:** 缓存可选组件菜单置于顶层状态 ([263533f](https://github.com/Tencent/tmagic-editor/commit/263533f09ad0e2e1316550b8d93877a3aeb76455))



# [1.3.0-beta.7](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.6...v1.3.0-beta.7) (2023-11-01)


### Bug Fixes

* **editor:** 不允许拖动的节点不允许被拖入 ([5021c74](https://github.com/Tencent/tmagic-editor/commit/5021c746fc87c6ac0e0d9206fe3b7b32626363ca)), closes [#544](https://github.com/Tencent/tmagic-editor/issues/544)


### Features

* **editor:** 新增组件树、数据源slots ([480d013](https://github.com/Tencent/tmagic-editor/commit/480d013994c02ecc98261d1f04726f2ed3a5a4b1))



# [1.3.0-beta.6](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.5...v1.3.0-beta.6) (2023-10-31)


### Bug Fixes

* **editor:** 数据源参数、请求头、请求体无法删除 ([cb2ff28](https://github.com/Tencent/tmagic-editor/commit/cb2ff281299417798ff41b260f970fc62bcdcbab)), closes [#543](https://github.com/Tencent/tmagic-editor/issues/543)


### Features

* **editor, data-source:** 支持http数据源请求、响应裁剪配置 ([f48afa9](https://github.com/Tencent/tmagic-editor/commit/f48afa98f28ab5eedefe4dfbc1a32303593b1786))



# [1.3.0-beta.5](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.4...v1.3.0-beta.5) (2023-10-24)


### Bug Fixes

* **editor:** 粘贴容器，组件树中子组件没有显示 ([5e7a0a0](https://github.com/Tencent/tmagic-editor/commit/5e7a0a0c53807422e936909a2a11a9edc572fad5))
* **editor:** 组件树多选后右键点击不会变回单选 ([af72d81](https://github.com/Tencent/tmagic-editor/commit/af72d819fee4b67a5f584c415d9776a2e37fa95e))
* **editor:** 组件树注册快捷方式 ([257c8c9](https://github.com/Tencent/tmagic-editor/commit/257c8c9fa1be795f63691b12846fca6c54fb8a24))
* **utils:** 完善生成数据源默认值 ([808c82f](https://github.com/Tencent/tmagic-editor/commit/808c82f1934773cff436d757b8f9bdd5026e4f50))


### Features

* **editor:** 组件列表支持设置tooltip显示详情 ([6a53747](https://github.com/Tencent/tmagic-editor/commit/6a5374726e54e5ef7610d8262080ca8b13856b19))



# [1.3.0-beta.4](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.3...v1.3.0-beta.4) (2023-10-23)


### Bug Fixes

* **data-source:** http数据源参数透传入base ([359806d](https://github.com/Tencent/tmagic-editor/commit/359806da96f7ca2f6d048a7676ba53f3b7b3fb01))



# [1.3.0-beta.3](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.2...v1.3.0-beta.3) (2023-10-23)


### Bug Fixes

* **editor:** data-source-field-select出现两个label ([c25be06](https://github.com/Tencent/tmagic-editor/commit/c25be06441e2f2d70a84dce060eac9f1e18b05a7))
* **editor:** 右键菜单消失子菜单可能不会跟着消失 ([1ce6411](https://github.com/Tencent/tmagic-editor/commit/1ce6411e052e22b200a79ac18d0d63b83ab26252))
* **form:** table分页lastData初始化异常 ([bd9686d](https://github.com/Tencent/tmagic-editor/commit/bd9686dbd8159e482943a73ce569aad9da34ead9))


### Features

* **cli:** 新增datasoucreSuperClass配置 ([2b2a9c6](https://github.com/Tencent/tmagic-editor/commit/2b2a9c6706333d777bf87a06ec67f15f10294de3))
* **core,data-source:** 数据源支持mock ([4c46a4e](https://github.com/Tencent/tmagic-editor/commit/4c46a4e575107a8e19a667deeca67fb69f934c37))
* **data-source,editor,schema:** 数据源mock新增在编辑器中使用的配置 ([83ab94f](https://github.com/Tencent/tmagic-editor/commit/83ab94fcad40a31fc612db578268bab714ff7cc0))
* **editor,data-source:** 组件配置支持关联数据源字段 ([e4613ba](https://github.com/Tencent/tmagic-editor/commit/e4613ba0536d719c87dbab48a1f2d8d1822988b2))
* **editor,schema:** 支持配置数据源mock ([d4a8b89](https://github.com/Tencent/tmagic-editor/commit/d4a8b89e6f9e079d9cfdc1eb8a9935f0f2aacb5b))
* **editor:** 事件关联数据源方法支持预置 ([588ec68](https://github.com/Tencent/tmagic-editor/commit/588ec68b2124cd997af1bae3ad7c8e9580959ad8))
* **editor:** 搜索防抖 ([d3171f4](https://github.com/Tencent/tmagic-editor/commit/d3171f4c69189c7326fc5e43d18f8b04af62be20))
* **editor:** 支持通过json快速配置数据源字段 ([56dfacb](https://github.com/Tencent/tmagic-editor/commit/56dfacbaaa343c3d3cd15c8c8cafcc9640a08dc9))
* **form:** cascader支持check-strictly/emit-path配置 ([ed3c3d6](https://github.com/Tencent/tmagic-editor/commit/ed3c3d60ce79e75062d15ecb1e38552a057dd410))
* **runtime:** 支持数据源mock ([9072642](https://github.com/Tencent/tmagic-editor/commit/9072642f2211911c9886987b33d05bfee1836daa))



# [1.3.0-beta.2](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.1...v1.3.0-beta.2) (2023-09-21)


### Bug Fixes

* **data-source:** 组件配置与条件关联了不同数据源时，编译问题 ([36988cd](https://github.com/Tencent/tmagic-editor/commit/36988cd3e08be743b4d6c92c6e7de0be9ce5f01e))
* **editor,stage:** 优化悬停出现组件列表的交互体验 ([5a25899](https://github.com/Tencent/tmagic-editor/commit/5a25899b5701c0539d3bf7002e3710895501addd))


### Features

* **editor:** 数据源事件配置 ([8b7a1e4](https://github.com/Tencent/tmagic-editor/commit/8b7a1e4e3ca2faee77ddf19c0a16abc6d114a907))



# [1.3.0-beta.1](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-beta.0...v1.3.0-beta.1) (2023-09-19)


### Features

* **data-source:** timing改成串行 ([28b3d2e](https://github.com/Tencent/tmagic-editor/commit/28b3d2e4b337e6c76c7a00fac6602424efd8d467))
* **editor,stage:** 新增鼠标悬停在组件上显示当前位置下所有组件菜单 ([1c6c9ab](https://github.com/Tencent/tmagic-editor/commit/1c6c9ab3e86420fcf17ae00c4ec4ec65c6015e19))
* **editor,util:** 完善数据源配置 ([5840ee5](https://github.com/Tencent/tmagic-editor/commit/5840ee537f698b46ce35400e8b26bbf343f2fc19))



# [1.3.0-beta.0](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.24...v1.3.0-beta.0) (2023-09-15)


### Bug Fixes

* **editor:** 新增数据源时，设置初始值 ([75b0d9c](https://github.com/Tencent/tmagic-editor/commit/75b0d9cdf3a41348bf6e00c721bf145c0a150810))
* **utils:** 编译条件函数异常兼容 ([7a617d4](https://github.com/Tencent/tmagic-editor/commit/7a617d4a17bde2fbf8d942f12fe522299f36ce62))


### Features

* **design:** drawer增加handleClose方法 ([a9c5004](https://github.com/Tencent/tmagic-editor/commit/a9c5004f4d3c88d9947f30660064ee4fec7b24c2))
* **editor:** 已选组件新增根节点右键菜单项：全部折叠 ([ea1cae7](https://github.com/Tencent/tmagic-editor/commit/ea1cae79684850f26703273d7df4a73829ffde4b))
* **editor:** 新增代码块编辑时查看修改 ([436914e](https://github.com/Tencent/tmagic-editor/commit/436914e7ee45ac4f84b90ff24e1569c7388e4ce4))
* **form,editor:** 代码块编辑后关闭新增确认弹窗 ([ac30340](https://github.com/Tencent/tmagic-editor/commit/ac303405efa6d98e029bec73c8bfa1e1a7e65d8a))



# [1.3.0-alpha.24](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.23...v1.3.0-alpha.24) (2023-09-07)


### Bug Fixes

* **editor:** 代码变化时，参数表单需要重新渲染 ([3cd1ac1](https://github.com/Tencent/tmagic-editor/commit/3cd1ac1cc4e3a57adcea1dd19d4f2ccb71a75a83))


### Features

* **form:** form-dialog,form-drawer新增inline,label-position配置 ([7bf5992](https://github.com/Tencent/tmagic-editor/commit/7bf59929b0196363d9f54fad58416c3677e1a58f))
* **form:** 时间容器增加每日周期显示 ([a0a2242](https://github.com/Tencent/tmagic-editor/commit/a0a2242341c3555ba0402250d38da4124d3062aa))



# [1.3.0-alpha.23](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.22...v1.3.0-alpha.23) (2023-08-31)


### Bug Fixes

* **core:** node销毁后重新渲染再销毁不会触发destroy事件 ([a8eea1a](https://github.com/Tencent/tmagic-editor/commit/a8eea1a73b2fe43f4784a6f5961be52ab4393bfa))
* **editor:** 当组件设置的bottom/right是，上下左右快捷键失效 ([cda3b04](https://github.com/Tencent/tmagic-editor/commit/cda3b04b85b02e572275d73d9c3981ba87981461))


### Features

* **editor:** fixed布局水平居中处理 ([2ccf47f](https://github.com/Tencent/tmagic-editor/commit/2ccf47f7dd3ec0a52e78f2cf12e06eabf6d26365))



# [1.3.0-alpha.22](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.21...v1.3.0-alpha.22) (2023-08-29)


### Bug Fixes

* **cli:** packages设置npm包初始化报错 ([0865cf4](https://github.com/Tencent/tmagic-editor/commit/0865cf4952d3d68f125a2b4739fd871b14c53561))
* **editor:** datasource自动补全用鼠标操作出错 ([7b2fd6e](https://github.com/Tencent/tmagic-editor/commit/7b2fd6ebd40680343c299941427194dbeccf53b7))
* **editor:** 新增数据源字段受上一次新增数据影响 ([f9ba8b8](https://github.com/Tencent/tmagic-editor/commit/f9ba8b8df56305c69b8823d2f1520701133b0022))


### Features

* **data-source:** 数据源中新增app属性，http数据源新增钩子 ([c5a1c2d](https://github.com/Tencent/tmagic-editor/commit/c5a1c2db769af8282ba0807cff30385ac133d2a7))
* **editor:** 新增数据源时先选类型 ([2bd86d2](https://github.com/Tencent/tmagic-editor/commit/2bd86d21012d28bc474951f87a81f622255ac36b))



# [1.3.0-alpha.21](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.20...v1.3.0-alpha.21) (2023-08-25)


### Features

* **editor:** 组件列表中的tooltip改成title ([54ec6de](https://github.com/Tencent/tmagic-editor/commit/54ec6de4f285b3b0fa31b3b579ffa372f3c9446a))
* **table:** action新增tooltip配置 ([5c9fd9a](https://github.com/Tencent/tmagic-editor/commit/5c9fd9a0f4728847ba346c44b9155ad6e35c31d9))
* **table:** 新增支持配置组件 ([bd6fae9](https://github.com/Tencent/tmagic-editor/commit/bd6fae9aede8cb1513c3883a21afee17d7dfc8fd))



# [1.3.0-alpha.20](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.19...v1.3.0-alpha.20) (2023-08-24)


### Bug Fixes

* **editor:** 数据源字符串模板提示出错 ([07a0271](https://github.com/Tencent/tmagic-editor/commit/07a02714df4ba4370f4a8cd4eaf1467db2be1069)), closes [#530](https://github.com/Tencent/tmagic-editor/issues/530)
* **editor:** 置顶计算错误 ([3f833d4](https://github.com/Tencent/tmagic-editor/commit/3f833d41f32cbe5a16c71d94235c815475786f0b))


### Features

* **cli,data-source,editor,playground,runtime:** 支持自定义数据源 ([573f1a2](https://github.com/Tencent/tmagic-editor/commit/573f1a2c17b7e7bd8fce7280d84a01892d2d8ae9))
* **editor:** 历史记录最多存储20条 ([ec8e8a1](https://github.com/Tencent/tmagic-editor/commit/ec8e8a17d233c80051d441655ac8d24217f16dc7))
* **form:** date,date-time值默认的日期格式改成/,以兼容ios ([2b07a6d](https://github.com/Tencent/tmagic-editor/commit/2b07a6de2d5f339b42c9a1c43992bd0d60e6f8fa))


### Reverts

* Revert "chore(stage): 优化高亮与单选性能" ([0274c36](https://github.com/Tencent/tmagic-editor/commit/0274c36afd1a9a4a14e2ed78868771f4dd13ca2f))



# [1.3.0-alpha.19](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.18...v1.3.0-alpha.19) (2023-08-10)


### Bug Fixes

* **cli:** 组件配置json key支持使用字符串常量 ([a8f8f48](https://github.com/Tencent/tmagic-editor/commit/a8f8f488adff794c132335b7681b80329d648e39))
* **stage:** 拖动出现left -1 ([e3b2594](https://github.com/Tencent/tmagic-editor/commit/e3b2594c57c21f5946de63a704728c7a7d989c90))


### Features

* **editor,data-source:** 支持数据源方法配置执行时机 ([07c49be](https://github.com/Tencent/tmagic-editor/commit/07c49bee4e3daafc0c05b87249c294f133a94aab))



# [1.3.0-alpha.18](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.17...v1.3.0-alpha.18) (2023-08-09)


### Bug Fixes

* **cli:** npm包会被转成相对路径 ([b1ea4ce](https://github.com/Tencent/tmagic-editor/commit/b1ea4cebad697f7348d8d11a1170aabc43be3314))
* **stage,playground:** moveableOptions对多选无效 ([4c9ef87](https://github.com/Tencent/tmagic-editor/commit/4c9ef8797571eb5a3d3cc9b0e753fa55c505be76)), closes [#529](https://github.com/Tencent/tmagic-editor/issues/529)



# [1.3.0-alpha.17](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.16...v1.3.0-alpha.17) (2023-08-08)


### Bug Fixes

* **editor:** diff code editor中全屏按钮点击无效 ([f9dc628](https://github.com/Tencent/tmagic-editor/commit/f9dc628ef41437001650a6b57be0556b9f8b08bb))
* **editor:** 使用画布上的删除按钮删除组件时依赖没有清空 ([0d3cd11](https://github.com/Tencent/tmagic-editor/commit/0d3cd11ade5fbd697e24aa5c61fbc0be7c3ea9e6))
* **form:** group-list上移下移行为不对 ([aabc77d](https://github.com/Tencent/tmagic-editor/commit/aabc77d90309976f3ddc0c67bb5e34104487d333))


### Features

* **core,data-source,ui,ui-react,ui-vue2,utils,runtime:** 解析显示条件配置 ([92df80e](https://github.com/Tencent/tmagic-editor/commit/92df80e71192df43cb87495ab53a4f47b1a3599c))
* **design:** input支持textarea rows ([63d8c98](https://github.com/Tencent/tmagic-editor/commit/63d8c988224ac2f635e3be5ad73370b0f152d783))
* **editor,schema:** 支持组件显示条件配置 ([3586207](https://github.com/Tencent/tmagic-editor/commit/35862078b3c86eefa53cea9dada92ded6ccc91c9))
* **form:** text配置支持函数 ([26cd37b](https://github.com/Tencent/tmagic-editor/commit/26cd37be23e23f3ffea4f92c57c498e6518072c0))
* **form:** 新增数字范围控件 ([5887977](https://github.com/Tencent/tmagic-editor/commit/5887977e458b3235a685e5176fba7a9775512c18))
* **utils:** 新增isObject ([46f6aea](https://github.com/Tencent/tmagic-editor/commit/46f6aeaaf70c257849a20bed825aadbbcc898b12))



# [1.3.0-alpha.16](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.15...v1.3.0-alpha.16) (2023-08-02)


### Bug Fixes

* **editor:** 删除组件后，依赖清除出现可能出现大量重复循环 ([b424abd](https://github.com/Tencent/tmagic-editor/commit/b424abd17a0239da25e0fd57b00b3163164e0125))
* **form:** dialog,drawer disable时确认按钮置灰 ([ded82aa](https://github.com/Tencent/tmagic-editor/commit/ded82aae410160e623534a5a5125b4b859a7dd9f))


### Features

* **editor:** 新增拖动按钮 ([90205f5](https://github.com/Tencent/tmagic-editor/commit/90205f539563cb047cf7070379c78b6af01103f4))



# [1.3.0-alpha.15](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.14...v1.3.0-alpha.15) (2023-07-24)


### Bug Fixes

* **editor:** 代码块节点slot参数丢失 ([23bee0b](https://github.com/Tencent/tmagic-editor/commit/23bee0b3ae13fd2bdfdce84a6dfed132b3d8bee2))
* **editor:** 流式布局下通过组件树拖动layout判断不正确 ([ce6d268](https://github.com/Tencent/tmagic-editor/commit/ce6d2684b73d503b1aec0b656262bda35e4cfe29))



# [1.3.0-alpha.14](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.13...v1.3.0-alpha.14) (2023-07-19)


### Bug Fixes

* **editor:** 修复CodeSelectColConfig interface找不到问题 ([1a546c3](https://github.com/Tencent/tmagic-editor/commit/1a546c326cd89f4f8bd50ff34f2d134a1954cd52)), closes [#525](https://github.com/Tencent/tmagic-editor/issues/525)


### Features

* **core,editor,data-source,form,schema:** 新增数据源方法配置,支持事件联动数据源方法 ([2a0680c](https://github.com/Tencent/tmagic-editor/commit/2a0680c7077914dcf24a818cf947172e0f586b2c))
* **editor:** 代码块参数注释改用extra来显示 ([0a9c7c9](https://github.com/Tencent/tmagic-editor/commit/0a9c7c9dda634dce8bdb924cd3599efba696fced))



# [1.3.0-alpha.13](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.12...v1.3.0-alpha.13) (2023-07-10)


### Features

* **editor:** 代码块删除新增确认 ([8e82d38](https://github.com/Tencent/tmagic-editor/commit/8e82d38bbb4fade53d881f8b11b5bed2d2fb7567))
* **editor:** 组件选择器点击已选择组件由重新选择改成选择组件 ([07cd306](https://github.com/Tencent/tmagic-editor/commit/07cd3065b2517c22a04ff3e6dc16243b582d9400))
* **stage:** 新增清除高亮方法 ([ee3ad63](https://github.com/Tencent/tmagic-editor/commit/ee3ad63aa3065d1ba0fd28b81af1f2d6b245101b))



# [1.3.0-alpha.12](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.11...v1.3.0-alpha.12) (2023-07-07)


### Bug Fixes

* **editor:** 组件拖入画布出错 ([565881c](https://github.com/Tencent/tmagic-editor/commit/565881c8c9b1ff89b1f129530da1d1d92846990c)), closes [#524](https://github.com/Tencent/tmagic-editor/issues/524)



# [1.3.0-alpha.11](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.10...v1.3.0-alpha.11) (2023-07-06)



# [1.3.0-alpha.10](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.9...v1.3.0-alpha.10) (2023-07-06)


### Bug Fixes

* **design:** tDesign form 使用reset ([c9b9e76](https://github.com/Tencent/tmagic-editor/commit/c9b9e76514f2606dc60231568bf0ed182b26c1ff)), closes [#522](https://github.com/Tencent/tmagic-editor/issues/522)


### Features

* **cli:** 生成的entry文件里面的import使用相对路径 ([24bb45e](https://github.com/Tencent/tmagic-editor/commit/24bb45e2b95a246f53e82ecf0ada5269660d3593))
* **editor,form:** 添加属性配置表单formState扩展函数prop ([fd53170](https://github.com/Tencent/tmagic-editor/commit/fd53170e59179f51c16f6908d8f817c6f77e96a1))
* **editor:** 新增右键菜单移动至其他页面功能 ([434bf2e](https://github.com/Tencent/tmagic-editor/commit/434bf2ed70b8261eb669ea39eab99fab29ecff46))
* **editor:** 点击画布区域聚焦，使得能使用画布的快捷键 ([9d24069](https://github.com/Tencent/tmagic-editor/commit/9d24069dcd75d2fc27bfd84aeda9d204d2e68762))
* **stage): feat(stage:** 新增获取moveable配置的方法 ([1710168](https://github.com/Tencent/tmagic-editor/commit/17101687bfbaa852f93a3b8c6856e13d916294cf)), closes [#521](https://github.com/Tencent/tmagic-editor/issues/521)



# [1.3.0-alpha.9](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.8...v1.3.0-alpha.9) (2023-07-03)


### Bug Fixes

* **core:** 一个组件配置多个相同的事件销毁后没有能成功移除事件绑定 ([47c26ed](https://github.com/Tencent/tmagic-editor/commit/47c26ed189cee952871c479bad61861abd05a482))
* **editor:** code-editor组件json类型序列化出错 ([2d4a6aa](https://github.com/Tencent/tmagic-editor/commit/2d4a6aa22a4d09aec9665cf4dfc7ba6dec275754))
* **editor:** 代码编辑器只有在内容发生变化时才触发保存 ([5b3c700](https://github.com/Tencent/tmagic-editor/commit/5b3c700f0034de25e9f494598c6bcf1888073fc3))
* **editor:** 添加代码块参数时出错 ([d480a03](https://github.com/Tencent/tmagic-editor/commit/d480a03369820e7d106d2e7d2a7fad24d8f8eace))
* **editor:** 组件树上的节点拖动画布中出错，应该不响应 ([d8d9184](https://github.com/Tencent/tmagic-editor/commit/d8d9184f3f5dda40b3fa4b49efecde4cdbcfd73f)), closes [#519](https://github.com/Tencent/tmagic-editor/issues/519)


### Features

* **editor, core:** 支持直接绑定整个数据源对象 ([74c9dea](https://github.com/Tencent/tmagic-editor/commit/74c9deaa29ba1fb6bd14486b17f68f8c8ab5afce))
* **editor,ui:** 新增显示隐藏组件功能 ([42b0436](https://github.com/Tencent/tmagic-editor/commit/42b043670e7fbb0cf293faadb5f2a8cb24a7dfa5)), closes [#516](https://github.com/Tencent/tmagic-editor/issues/516)



# [1.3.0-alpha.8](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.7...v1.3.0-alpha.8) (2023-06-27)


### Bug Fixes

* **editor:** 没有页面时隐藏属性面板 ([91e4680](https://github.com/Tencent/tmagic-editor/commit/91e46800244eaa1cbd0b05712380388ea243dd7b))
* **editor:** 组件树右键菜单支持多选 ([1660e94](https://github.com/Tencent/tmagic-editor/commit/1660e941d7e1e1597725b2131885c0d14f358f65))


### Features

* **editor,core:** 数据源模板改成使用 ES 分隔符 ([b952e6e](https://github.com/Tencent/tmagic-editor/commit/b952e6efd1e096b47f7f32b938cd5ae6975fc4bf))
* **editor:** 导出Resizer组件 ([fbf3896](https://github.com/Tencent/tmagic-editor/commit/fbf3896878709343651401f237ff14d9ae6ccd3c))
* **editor:** 属性样式添加边框 ([4daf6b4](https://github.com/Tencent/tmagic-editor/commit/4daf6b441034b354a5e0ebb984cf7ffa30d22fce))



# [1.3.0-alpha.7](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.6...v1.3.0-alpha.7) (2023-06-19)


### Bug Fixes

* **editor:** 异常处理 ([b37568b](https://github.com/Tencent/tmagic-editor/commit/b37568b440a87cf8804232c87c8fbeefc498cce3))
* **editor:** 支持多层右键菜单 ([1f55272](https://github.com/Tencent/tmagic-editor/commit/1f5527270cc780f6efe0be542e4b87e7961680b7))
* **form:** group-list默认展开 ([8ca6b3f](https://github.com/Tencent/tmagic-editor/commit/8ca6b3fbe4a305ba3c74b48090e05096a63fef35))


### Features

* **editor:** 完善快捷键注册机制 ([9716ace](https://github.com/Tencent/tmagic-editor/commit/9716aceabf5b587ad4412499cab2b55ad968a251))
* **editor:** 新增parseDSL配置，用于解析DSL，默认使用eval ([2b881c3](https://github.com/Tencent/tmagic-editor/commit/2b881c386316258aa9ccf89b5bd2328c4a9c8b18))



# [1.3.0-alpha.6](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.5...v1.3.0-alpha.6) (2023-06-12)


### Bug Fixes

* **runtime:** resetcss不生效 ([567b054](https://github.com/Tencent/tmagic-editor/commit/567b054b32c344af1b5ad25615da09de027966ef))
* **utils:** 容器发生更新，需要编译子组建配置 ([ed4b3c7](https://github.com/Tencent/tmagic-editor/commit/ed4b3c77ef468289f5b24030a9cf3a514408a8c3)), closes [#512](https://github.com/Tencent/tmagic-editor/issues/512)


### Features

* **app,utils,runtime:** 将resetcss.css移到utils,在runtime中引入 ([01d1dcc](https://github.com/Tencent/tmagic-editor/commit/01d1dccbb65eb3c77c1caeff69e6c83610b4409a))
* **editor:** 优化工作区间大小拖动体验 ([da18842](https://github.com/Tencent/tmagic-editor/commit/da18842e42456b7cba55c8c0dc69c0b197ecf738))
* **editor:** 优化快捷键操作 ([06d289a](https://github.com/Tencent/tmagic-editor/commit/06d289aff33221615def85aca6f2954200bb5eb7))
* **ui:** text使用p渲染 ([391fcee](https://github.com/Tencent/tmagic-editor/commit/391fceef30db5e771323adc20330b8529308eaad))



# [1.3.0-alpha.5](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.4...v1.3.0-alpha.5) (2023-06-06)


### Features

* **editor:** 添加几个slot ([97101f1](https://github.com/Tencent/tmagic-editor/commit/97101f18a6e2b86ca8c293f6af77069681a85ced))



# [1.3.0-alpha.4](https://github.com/Tencent/tmagic-editor/compare/v1.3.0-alpha.3...v1.3.0-alpha.4) (2023-05-30)


### Bug Fixes

* **design:** 默认props ([05dfd9d](https://github.com/Tencent/tmagic-editor/commit/05dfd9d9361c77e573eca61d674ac28930645776))


### Features

* **editor:** 事件配置默认展开全部 ([256a958](https://github.com/Tencent/tmagic-editor/commit/256a9586d73fc53ab9ff0018d7fb8fba3dd6491a))
* **editor:** 代码块配置默认全部展开 ([e83cf32](https://github.com/Tencent/tmagic-editor/commit/e83cf322b5099e2ecd6b77605dea4145a6b33e88))
* **form:** groupList新增默认展开所有的配置 ([9281d06](https://github.com/Tencent/tmagic-editor/commit/9281d067234ceb24e0712901ed27984e8e6c60ba))



# [1.3.0-alpha.3](https://github.com/Tencent/tmagic-editor/compare/v1.2.15...v1.3.0-alpha.3) (2023-05-30)


### Bug Fixes

* **design:** button 判断默认slot ([a97523e](https://github.com/Tencent/tmagic-editor/commit/a97523e800a0530fd8241b88173eba4a55881458))
* **editor:** 数据源模板输入框初始化显示问题 ([668991d](https://github.com/Tencent/tmagic-editor/commit/668991de264e498569018b496e49763a34888e82))


### Features

* 完善tdesign-vue-next适配 ([24604c9](https://github.com/Tencent/tmagic-editor/commit/24604c9d36feb716a1f4c384f17fa152aa0b3c12))
* 新增数据源 ([aac478e](https://github.com/Tencent/tmagic-editor/commit/aac478eebc609050e57c85f5945250daed14ff00))



## [1.2.15](https://github.com/Tencent/tmagic-editor/compare/v1.2.14...v1.2.15) (2023-04-26)


### Bug Fixes

* **design:** drawer v-model失效 ([fded83e](https://github.com/Tencent/tmagic-editor/commit/fded83ee0d8e141dda5ed177646665dfc1c9efee))
* **form:** fieldset初始化时就触发了change事件 ([982cc46](https://github.com/Tencent/tmagic-editor/commit/982cc4685ec1aca07e6ebaab973e2be616562c01))
* **ui:** model prop设置成可选 ([315e83d](https://github.com/Tencent/tmagic-editor/commit/315e83da190ac9eaa41fa20149925e0792148940))


### Features

* **form:** select支持clearable,filterable配置 ([af393e3](https://github.com/Tencent/tmagic-editor/commit/af393e34fb3782ad237cd5ca928ba57c1c4a003d))
* **table:** action hook配置加入index参数 ([26835f6](https://github.com/Tencent/tmagic-editor/commit/26835f6a29a7586ab45240e9d3c9e5afa97252b0))
* **util:** guid方法 ([0295d6f](https://github.com/Tencent/tmagic-editor/commit/0295d6f4b54ea90b51a3746a6f9137fd7068d42c))
* 完善tdesign-vue-next适配 ([ea4af42](https://github.com/Tencent/tmagic-editor/commit/ea4af425f35e0ee9ad561b7ff26f047ece73000d))



## [1.2.14](https://github.com/Tencent/tmagic-editor/compare/v1.2.13...v1.2.14) (2023-04-20)


### Bug Fixes

* **core:** node events 为空时，应为空数组 ([abcac71](https://github.com/Tencent/tmagic-editor/commit/abcac71826b2e8eaff36c97726448923d5853e3d)), closes [#500](https://github.com/Tencent/tmagic-editor/issues/500)
* **playground,runtime:** 设备切换时，重新设置root font size与ua ([84e2cdf](https://github.com/Tencent/tmagic-editor/commit/84e2cdf22da1f376689e87fb05fe98f62db1e62a)), closes [#501](https://github.com/Tencent/tmagic-editor/issues/501)


### Features

* **core:** 重新设置designWidth时，应该重新计算root font size ([3d9f387](https://github.com/Tencent/tmagic-editor/commit/3d9f38781a059b29ec23d1947ae0574e57ffce32))
* **editor:** 代码列表默认只展开第一层 ([41cd22b](https://github.com/Tencent/tmagic-editor/commit/41cd22b17f0d434016254cddda949651c21a65e3))
* **editor:** 代码编辑交互优化 ([51dadab](https://github.com/Tencent/tmagic-editor/commit/51dadabc2c89403b772cf3aa1f5ed77f959c82e4))
* **ui:** 修改useApp实现，与ui-react中保持一致 ([befaf67](https://github.com/Tencent/tmagic-editor/commit/befaf67ba74ec0ec1dc3683b26d0de10ee6b3cf0))



## [1.2.13](https://github.com/Tencent/tmagic-editor/compare/v1.2.12...v1.2.13) (2023-03-30)


### Bug Fixes

* **editor:** 代码块code-block-panel-tool slot data丢失 ([aa12779](https://github.com/Tencent/tmagic-editor/commit/aa12779598ba94a56f26776a6dc1213ed5bb35dc))


### Features

* **design,element-plus-adapter,tdesign-vue-next-adapter:** 新增drawer ([1b5d3e5](https://github.com/Tencent/tmagic-editor/commit/1b5d3e564d8afe0bb2709ef9c14e8577592b2c9e))



## [1.2.12](https://github.com/Tencent/tmagic-editor/compare/v1.2.11...v1.2.12) (2023-03-30)


### Bug Fixes

* **core:** style兼容hippy ([fb026a1](https://github.com/Tencent/tmagic-editor/commit/fb026a134ff74193a89519428a0185806c339b04))
* **core:** 没有设置curPage，默认取第一个page ([44290b6](https://github.com/Tencent/tmagic-editor/commit/44290b65ba77b597304165acce46b94ceb7c40be))



## [1.2.11](https://github.com/Tencent/tmagic-editor/compare/v1.2.10...v1.2.11) (2023-03-30)


### Bug Fixes

* **form:** table 移动列变成了交换 ([37045f7](https://github.com/Tencent/tmagic-editor/commit/37045f7201a48105a32e0371f27c69154393e777))
* **form:** table可能出现两个extra ([0cac40e](https://github.com/Tencent/tmagic-editor/commit/0cac40eb316f83a5dcee8fbf627f97fb9af8a713))


### Features

* **core,runtime:** 删除App中pages，只留下当前page ([cfd2a6e](https://github.com/Tencent/tmagic-editor/commit/cfd2a6eee38bde7f723c27509a1cd9f57c3165ba))
* **editor,form,core,schema:** 事件支持触发代码块 ([39468f3](https://github.com/Tencent/tmagic-editor/commit/39468f3b95749c424be84e4229c18fcd18ec9b54))
* **editor:** 新增依赖收集器 ([35f9a59](https://github.com/Tencent/tmagic-editor/commit/35f9a59f442d50b195b14f91da26b6b314928f55))
* **edtior:** 代码块使用依赖收集器改造 ([3b6ca97](https://github.com/Tencent/tmagic-editor/commit/3b6ca97f4ceeab215cb9d43b237159993bb6370b))



## [1.2.10](https://github.com/Tencent/tmagic-editor/compare/v1.2.9...v1.2.10) (2023-03-27)


### Bug Fixes

* **core:** 非浏览器环境屏蔽相关代码 ([36c4ffa](https://github.com/Tencent/tmagic-editor/commit/36c4ffa02e1b8f7e43a53e29e3e5f57541ca1574))
* **form:** 修复lastvalues漏传的问题 ([54e2ce2](https://github.com/Tencent/tmagic-editor/commit/54e2ce2c7e49d7eaeecd2044bc4a287d1fa4cc0e))
* **runtime:** vue playgound 中dsl更新没有同步到Core中 ([b665262](https://github.com/Tencent/tmagic-editor/commit/b6652624e396b73657867759a3d34c852f6de43f))


### Features

* **core:** 新增节点操作方法 ([f1f100f](https://github.com/Tencent/tmagic-editor/commit/f1f100f9527ec5e318e0f753d8770a9587eb45c1))



## [1.2.9](https://github.com/Tencent/tmagic-editor/compare/v1.2.8...v1.2.9) (2023-03-13)


### Bug Fixes

* 修复动态tab渲染问题 ([67428f6](https://github.com/Tencent/tmagic-editor/commit/67428f606aa0be17b5e140e27f65fb0da56f538e))
* 解决codecc安全工单,更新了admin中对编辑器的一些用法 ([a840750](https://github.com/Tencent/tmagic-editor/commit/a8407503b97413c26f9436ff3cbf4f3555d51acc))



## [1.2.8](https://github.com/Tencent/tmagic-editor/compare/v1.2.7...v1.2.8) (2023-03-06)


### Bug Fixes

* **editor,ui,ui-vue2,ui-react:** 页面配置更新后，蒙层无法显示 ([c025508](https://github.com/Tencent/tmagic-editor/commit/c025508cd79009e757b73a190cbb201cd44b3edf)), closes [#472](https://github.com/Tencent/tmagic-editor/issues/472)
* **editor:** 更新组件后，组件树选中状态被重置 ([e0c0143](https://github.com/Tencent/tmagic-editor/commit/e0c014397056bcddf82acd063288d3d045bd2dc5))
* **editor:** 组件树切换选择组件可能触发多选 ([b8cda53](https://github.com/Tencent/tmagic-editor/commit/b8cda53d6a9af8c06d4f8670289d2a6c9eadfe5c))


### Features

* **stage:** 支持多选组件并将多个组件拖入指定容器中 ([449efcc](https://github.com/Tencent/tmagic-editor/commit/449efcc56b0cee6898ff439ff441a8a67a1a143c)), closes [#405](https://github.com/Tencent/tmagic-editor/issues/405)



## [1.2.7](https://github.com/Tencent/tmagic-editor/compare/v1.2.6...v1.2.7) (2023-03-02)


### Bug Fixes

* **design:** element-plus@2.2.22开始scrollbar.wrap$改成wrapRef ([62038c8](https://github.com/Tencent/tmagic-editor/commit/62038c8c601f4143ea8812f4d77782c6dac69df0))
* **stage:** 选择父组件的able功能丢失 ([b4bee9e](https://github.com/Tencent/tmagic-editor/commit/b4bee9eb82b5367d8a6e1960b5bab02ab8f6f8e3))


### Features

* **cli:** cli返回app ([c41af9d](https://github.com/Tencent/tmagic-editor/commit/c41af9d01d3746d218e3f71166c54eb2a9476fe2))
* **form:** 支持表单差异对比 ([6610f30](https://github.com/Tencent/tmagic-editor/commit/6610f30afd84fce9a989f49eb2de8a9b8eee745a))
* **stage,editor:** 增肌删除快捷按钮 ([c9bacb9](https://github.com/Tencent/tmagic-editor/commit/c9bacb96cddfc69b737a8ecb058f5479ba8240b7))



## [1.2.6](https://github.com/Tencent/tmagic-editor/compare/v1.2.5...v1.2.6) (2023-02-21)


### Bug Fixes

* **form:** select下拉列表分页不生效问题 ([8edf023](https://github.com/Tencent/tmagic-editor/commit/8edf023a0014747758b193c411b285baa11f05de))



## [1.2.5](https://github.com/Tencent/tmagic-editor/compare/v1.2.4...v1.2.5) (2023-02-17)


### Bug Fixes

* **editor:** 修复优化性能引起的问题,支持回退撤销对代码关系的更新 ([0109181](https://github.com/Tencent/tmagic-editor/commit/010918198a7daa97ed3bd3c797ac88c091ef90a1))



## [1.2.4](https://github.com/Tencent/tmagic-editor/compare/v1.2.3...v1.2.4) (2023-02-17)


### Bug Fixes

* 调整绑定关系结构,优化性能  ([a013f35](https://github.com/Tencent/tmagic-editor/commit/a013f35cd9bd5bb9b3f3c796d603c9efc31d5b5d))



## [1.2.3](https://github.com/Tencent/tmagic-editor/compare/v1.2.2...v1.2.3) (2023-02-15)


### Features

* **cli:** 支持配置是否自动安装组件npm包，支持配置安装组件npm包后是否保持package.json不变 ([d06a874](https://github.com/Tencent/tmagic-editor/commit/d06a874c3b997a73f80bed4196974a331d6ef133))
* **form:** select config.option.afterRequest添加postOptions ([4d0b4c3](https://github.com/Tencent/tmagic-editor/commit/4d0b4c31781e5a3381fc4d73bf62c6f66253a563))



## [1.2.2](https://github.com/Tencent/tmagic-editor/compare/v1.2.1...v1.2.2) (2023-02-09)


### Bug Fixes

* **editor:** set root 可能没有items ([aa566e9](https://github.com/Tencent/tmagic-editor/commit/aa566e9535c5afd76fa15b39f42de395758189eb))



## [1.2.1](https://github.com/Tencent/tmagic-editor/compare/v1.2.0...v1.2.1) (2023-02-09)


### Bug Fixes

* **editor:** 新增的组件如果没有初始化left值,会导致无法通过键盘方向键左右移动 ([3b30d89](https://github.com/Tencent/tmagic-editor/commit/3b30d89956717d686046876156c3571f35c0036f)), closes [#468](https://github.com/Tencent/tmagic-editor/issues/468)
* **editor:** 编辑器中间列宽度出现负值 ([a6226cb](https://github.com/Tencent/tmagic-editor/commit/a6226cba188ca107919237c4d92c0f19c33e77fe))


### Features

* **admin:** 使用@tmagic/table重构活动列表 ([8fa1d4a](https://github.com/Tencent/tmagic-editor/commit/8fa1d4a5c3294df6449eb15ef9181717416e3dc4))
* **cli:** export allowTs函数 ([bf547fe](https://github.com/Tencent/tmagic-editor/commit/bf547fe1a06239d6703d1887f86fa47f0ee66232))
* **editor,form,schema:** 优化代码 ([0b537f5](https://github.com/Tencent/tmagic-editor/commit/0b537f5bff3466fff2a6cfb5ed37811b28968066))
* **editor:** 修改service get set 方法的ts定义，不再需要传入泛型参数 ([0491487](https://github.com/Tencent/tmagic-editor/commit/0491487385257642e0c5e246831f2158175ca532))
* **util:** 修改isPage函数定义 ([b9d4e8c](https://github.com/Tencent/tmagic-editor/commit/b9d4e8c66c2b0c3fc8085d1ee23ed4f0739ed3cb))



# [1.2.0](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.27...v1.2.0) (2022-12-22)


### Bug Fixes

* **editor:** 代码块列表无法滚动 ([87a19c9](https://github.com/Tencent/tmagic-editor/commit/87a19c9bae4dc0d88c6bb2c9d164db6198e8f6ee))



# [1.2.0-beta.27](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.26...v1.2.0-beta.27) (2022-12-13)


### Bug Fixes

* **editor:** 组件销毁时移除service的时间监听 ([cfc57f1](https://github.com/Tencent/tmagic-editor/commit/cfc57f17af8c7b32ca31056570aa422219963d04))



# [1.2.0-beta.26](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.25...v1.2.0-beta.26) (2022-12-12)


### Bug Fixes

* **editor:** 粘贴的组件为当前选中组件的副本时，则添加到当前选中组件的父组件中 ([3dcdc04](https://github.com/Tencent/tmagic-editor/commit/3dcdc04127362fae1a5a291b7950ddd44b79a7ad)), closes [#448](https://github.com/Tencent/tmagic-editor/issues/448)


### Features

* **design:** 添加class ([ffb84cf](https://github.com/Tencent/tmagic-editor/commit/ffb84cffca8afda45bc153e467a926cf1ec5c0be))
* **stage,editor:** 添加disabledDragStart配置,用于关闭按下鼠标并拖动功能 ([dd8ac99](https://github.com/Tencent/tmagic-editor/commit/dd8ac99d5d20a019c1a18f445d77bb9075c831d9))
* **tdesign-vue-next-adapter:** 新增tdesign设配器 ([c3888be](https://github.com/Tencent/tmagic-editor/commit/c3888bedf229c025b41f97c307771493e84839b9))



# [1.2.0-beta.25](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.24...v1.2.0-beta.25) (2022-12-07)


### Bug Fixes

* **cli:** 异步组件返回应该是个函数 ([138614a](https://github.com/Tencent/tmagic-editor/commit/138614a57adaf11b46b86f95c70df00975903c7b))
* **cli:** 插件不支持ts的问题 ([ccb4e67](https://github.com/Tencent/tmagic-editor/commit/ccb4e675ab8e33cafb5374f9db4c602c380ccc31))
* **playground:** 加载组件表单配置资源失败 ([ba20eb8](https://github.com/Tencent/tmagic-editor/commit/ba20eb8cf1aebc735d75c6fb2f3023f0c61b8360))



# [1.2.0-beta.24](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.23...v1.2.0-beta.24) (2022-12-07)


### Bug Fixes

* **form:** disable配置失效 ([12d56ae](https://github.com/Tencent/tmagic-editor/commit/12d56aeda9197dfc31bf5b7e8fe480deca4a85f1))



# [1.2.0-beta.23](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.22...v1.2.0-beta.23) (2022-12-07)


### Bug Fixes

* **editor:** modelValue自动更新不成功 ([e813129](https://github.com/Tencent/tmagic-editor/commit/e813129eb8ea6e11e683c081847dd17fb1104dfd))


### Features

* **form:** 完善select remote功能 ([7445d24](https://github.com/Tencent/tmagic-editor/commit/7445d2453194258256c70d4936aa43d04dfecdb2))



# [1.2.0-beta.22](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.21...v1.2.0-beta.22) (2022-12-06)



# [1.2.0-beta.21](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.20...v1.2.0-beta.21) (2022-12-06)


### Bug Fixes

* **editor:** layout 组件中hasRight判断出错 ([f6dca97](https://github.com/Tencent/tmagic-editor/commit/f6dca97442339f1cc941ebaf39eddbe657f76512))
* **editor:** services在组件unmounted时只重置状态不移除事件 ([45a20d9](https://github.com/Tencent/tmagic-editor/commit/45a20d9405900c62dfc1c3b82612c69c409da373))


### Features

* **editor:** 新增可以移除所有service插件的方法 ([67c7faf](https://github.com/Tencent/tmagic-editor/commit/67c7faf832c811866f6c012a7362472397fdc6ef))



# [1.2.0-beta.20](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.19...v1.2.0-beta.20) (2022-12-05)


### Bug Fixes

* **editor:** 复制粘贴时添加的到的父组件应当是当前父组件 ([828681e](https://github.com/Tencent/tmagic-editor/commit/828681e9608629414811d49da7ba3a3100e82ccd)), closes [#448](https://github.com/Tencent/tmagic-editor/issues/448)
* **editor:** 编辑器初始化默认选择节点 ([45eaea6](https://github.com/Tencent/tmagic-editor/commit/45eaea6f686d81d04c92bbed42a3a0092b7228d8))



# [1.2.0-beta.19](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.18...v1.2.0-beta.19) (2022-12-01)


### Bug Fixes

* **editor:** 页面切换不在重新渲染画布 ([b7934f9](https://github.com/Tencent/tmagic-editor/commit/b7934f9f5108a72ea7224b573e0bbb3722983b64))


### Features

* **editor:** history增加page-change事件 ([830c8d8](https://github.com/Tencent/tmagic-editor/commit/830c8d8747cd23e3dbce90d60a9dc0ac1e53662d))
* **form:** dialog支持disabled配置 ([239b5d3](https://github.com/Tencent/tmagic-editor/commit/239b5d3efeae916a8cf3e3566d88063ecccc0553))
* **form:** table支持rowkey配置 ([ea8b863](https://github.com/Tencent/tmagic-editor/commit/ea8b8636944f37941ebffa8866074d310cf32918))


### Reverts

* Revert "chore: github文档构建锁定在v1.1.6版本" ([c143a5f](https://github.com/Tencent/tmagic-editor/commit/c143a5f7670ae61d80c1a2cfcc780cfb5259849d))



# [1.2.0-beta.18](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.17...v1.2.0-beta.18) (2022-11-24)


### Bug Fixes

* **editor:** itemsFunction中补全value ([e497ab0](https://github.com/Tencent/tmagic-editor/commit/e497ab00085e1098842024cbd9df50ec566254a9))


### Features

* **cli:** export loadUserConfig ([d46d611](https://github.com/Tencent/tmagic-editor/commit/d46d61184bdbe6628f172cde92a2327ce3f2485f))



# [1.2.0-beta.17](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.16...v1.2.0-beta.17) (2022-11-24)


### Bug Fixes

* **editor:** m-form不能加key，会导致vue示例销毁重建 ([fc50c87](https://github.com/Tencent/tmagic-editor/commit/fc50c87ad51733b16751f4b2b6b0d5f3e9d342e8))



# [1.2.0-beta.16](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.15...v1.2.0-beta.16) (2022-11-23)


### Bug Fixes

* **design:** tabs支持modelValue ([47e851c](https://github.com/Tencent/tmagic-editor/commit/47e851ce5e1e9a60672b3854229552ff24989188))
* **editor:** 切换选中组件后组件属性表单内存未释放 ([eacc4dc](https://github.com/Tencent/tmagic-editor/commit/eacc4dc7942ab38b4e36ee851cc7e19a3a6bb10b)), closes [#123](https://github.com/Tencent/tmagic-editor/issues/123)
* 在tree上增加tabindex来监听focus事件,完善组件树多选体验 ([5ae32f0](https://github.com/Tencent/tmagic-editor/commit/5ae32f0792e90319b1e546f72dfba174615307c6))



# [1.2.0-beta.15](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.14...v1.2.0-beta.15) (2022-11-22)


### Bug Fixes

* **editor:** 修复setCodeDslById不传content引起的问题 ([13dc3ca](https://github.com/Tencent/tmagic-editor/commit/13dc3ca25936cb074f70c6a94591b5e0226fe68c))


### Features

* **editor:** 修改代码块参数结构,以对象形式暴露app,params ([8195a60](https://github.com/Tencent/tmagic-editor/commit/8195a600f52f478e0db386fe32b8819fca6d8852))



# [1.2.0-beta.14](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.13...v1.2.0-beta.14) (2022-11-18)


### Bug Fixes

* **editor:** 编辑器左中右列宽支持配置最小宽度 ([bddfcee](https://github.com/Tencent/tmagic-editor/commit/bddfcee92b968b09875c43a9035bf9b7817396e3))


### Features

* **cli:** useTs 为必填参数 ([bb5aa67](https://github.com/Tencent/tmagic-editor/commit/bb5aa6722f4b1a30034ad96edadadd0bb6575848))
* **cli:** 增加 useTs 配置 ([b512e14](https://github.com/Tencent/tmagic-editor/commit/b512e141293746871f760895a79f092242e1a0be))
* **editor:** 代码编辑支持全屏 ([8271a3b](https://github.com/Tencent/tmagic-editor/commit/8271a3b497ac3aadb79364e0eebc912ce7b3304f))
* **editor:** 添加右键菜单粘贴icon ([813ca55](https://github.com/Tencent/tmagic-editor/commit/813ca55ef6831ce3505ff2b4c9269eab04aad7f8))
* **table:** expand内容支持vue组件 ([aa9293a](https://github.com/Tencent/tmagic-editor/commit/aa9293af55475948252acc078695594a320e8839))



# [1.2.0-beta.13](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.12...v1.2.0-beta.13) (2022-11-15)


### Bug Fixes

* **form:** time value改成HH:mm:ss字符串,支持配置 ([4fe45eb](https://github.com/Tencent/tmagic-editor/commit/4fe45eb36df988bbcb972b7599d62f2f9a3d3276))



# [1.2.0-beta.12](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.11...v1.2.0-beta.12) (2022-11-15)


### Bug Fixes

* **cli:** entry生成路径错误问题 ([f5a8d6b](https://github.com/Tencent/tmagic-editor/commit/f5a8d6bdc6e490fbe45fa3472cb6430562d407ab))
* **editor:** 修复自动保存提示不展示的问 ([0f0ec18](https://github.com/Tencent/tmagic-editor/commit/0f0ec183a869f8530fc39f9cfd533640d707ca98)), closes [#440](https://github.com/Tencent/tmagic-editor/issues/440)
* **editor:** 区分直接关闭和保存后关闭 ([0eab817](https://github.com/Tencent/tmagic-editor/commit/0eab817a1132561383b545c13c8c90c31f58d5b7)), closes [#440](https://github.com/Tencent/tmagic-editor/issues/440)
* **editor:** 新增删除页面不应该添加历史 ([3e78a08](https://github.com/Tencent/tmagic-editor/commit/3e78a0809b776081d6f56076770e3b8acba0e993))
* 代码块结构改造完成 ([c7a8552](https://github.com/Tencent/tmagic-editor/commit/c7a8552d9b9de6709b5a36070cbcbcd2739c02ed))
* 优化组件列表多选键盘快捷键监听体验 ([b2702aa](https://github.com/Tencent/tmagic-editor/commit/b2702aaa9e3a74194626dee5599a444dd402e154))


### Features

* **cli:** ast 解析入口文件优化 ([04e1857](https://github.com/Tencent/tmagic-editor/commit/04e18572fd6cd76b80610d4c7b1cf05cf40eaabd))
* **cli:** hooks.beforeWriteEntry 改为 async ([cc21c47](https://github.com/Tencent/tmagic-editor/commit/cc21c47829e59be85270b325b884dbcf21d3d83e))
* **cli:** 优化 logger，优化 ast 解析 ([958bcd3](https://github.com/Tencent/tmagic-editor/commit/958bcd3ec5fc964532e13bb623a5ac36f898915c))
* **cli:** 增加 hook.beforeWriteEntry ([4c94fa0](https://github.com/Tencent/tmagic-editor/commit/4c94fa0a8fa0cbb9618017709bd2479629d4ac52))
* **cli:** 文件声明“不合法”修改为“缺失” ([6c5cc55](https://github.com/Tencent/tmagic-editor/commit/6c5cc55f31d7c6b3872a64cf464a53799efd757f))
* **cli:** 设置 dynamicImport 时生成 async-plugin-entry ([258ac4d](https://github.com/Tencent/tmagic-editor/commit/258ac4d56b1da3bf8b2e0fcd1c6189a13efc7793))
* core代码执行兼容老的数据格式 ([a03ac7c](https://github.com/Tencent/tmagic-editor/commit/a03ac7c78b3b0a15ebb3744593ee40769d6e126d))
* **editor:** 代码块支持传递参数 (merge request !9) ([16f671c](https://github.com/Tencent/tmagic-editor/commit/16f671cd8fa0a077a1b00ac374635671412804b3))
* **editor:** 代码编辑新增草稿功能 ([3673d60](https://github.com/Tencent/tmagic-editor/commit/3673d6016de1289104dd39c77c7f7bbd705f42a0)), closes [#440](https://github.com/Tencent/tmagic-editor/issues/440)
* **editor:** 拆分代码块编辑器便于以后扩展,支持草稿自动保存,修复代码块列表的样式问题 ([d98d374](https://github.com/Tencent/tmagic-editor/commit/d98d3748d36e3a87e726a27a6f2d851b0c26bf75)), closes [#440](https://github.com/Tencent/tmagic-editor/issues/440)
* **table:** 支持expand内容可以为html ([f824b66](https://github.com/Tencent/tmagic-editor/commit/f824b661bd897eefce567691c7f3ac55046246de))
* 修改code_block结构,组件代码关系绑定改为table,绑定关系更新未完成 ([c4293f1](https://github.com/Tencent/tmagic-editor/commit/c4293f17a679015277a4547cae2bf391f10b9fda))



# [1.2.0-beta.11](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.10...v1.2.0-beta.11) (2022-11-08)


### Bug Fixes

* **editor:** Layout 组件与Layout ts type 重名，将组件改为LayoutContainer ([eae7769](https://github.com/Tencent/tmagic-editor/commit/eae776990cd8e8df6492b6a3ab89a6ee26edc617))



# [1.2.0-beta.10](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.9...v1.2.0-beta.10) (2022-11-07)


### Bug Fixes

* **editor:** content-menu没有响应式 ([c2e8a1c](https://github.com/Tencent/tmagic-editor/commit/c2e8a1caae210993366e1234613fc78e606ce36b))
* **editor:** 单选水平居中 ([e8c53c2](https://github.com/Tencent/tmagic-editor/commit/e8c53c2bd1bb3c0f32745fcdd840a7faaa61e07b))
* **editor:** 多选后，再单选多选中的第一个元素，多选状态没有清除 ([66e7278](https://github.com/Tencent/tmagic-editor/commit/66e727838b9306112a38b000b3675b4cdfc8db8a))
* **editor:** 画布滚动条出现的不准确 ([8d8ef55](https://github.com/Tencent/tmagic-editor/commit/8d8ef55b81ecbfe8b1fa2a8ee738c7b4952369c1))
* **form:** table 分页 ([929d7c4](https://github.com/Tencent/tmagic-editor/commit/929d7c463f2880a59deef2ec4d377868bd27d9cc))
* **form:** table 拖动排序 ([617b025](https://github.com/Tencent/tmagic-editor/commit/617b025ce13b87c11292db39d741cf769cbcbc9d))



# [1.2.0-beta.9](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.8...v1.2.0-beta.9) (2022-10-28)


### Bug Fixes

* **editor:** content-menu隐藏时不销毁 ([723da40](https://github.com/Tencent/tmagic-editor/commit/723da40bc7d0830610378efc8b540edaaf7e468d))
* **editor:** 优化代码逻辑 ([f8d7eae](https://github.com/Tencent/tmagic-editor/commit/f8d7eaea5ed13b2d7a8978c212705bbd130e9d3b))
* **form:** formState需要同步props更新 ([49c0ec9](https://github.com/Tencent/tmagic-editor/commit/49c0ec9dd9289723f39037e47a58eed598135e2c))
* 使用form.initValues解决代码块绑定关系更新不及时的问题 ([0ca0abf](https://github.com/Tencent/tmagic-editor/commit/0ca0abf2da4cf835c20c661cd773955350fa830d))


### Features

* **form:** 展开更多支持配置函数 ([9fd8385](https://github.com/Tencent/tmagic-editor/commit/9fd8385651c895208a47eb621340a798fe3a4c93))



# [1.2.0-beta.8](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.7...v1.2.0-beta.8) (2022-10-25)


### Bug Fixes

* **editor:** 修复管理端和pg表现不一致的问题,删除冗余逻辑 ([bc0f17c](https://github.com/Tencent/tmagic-editor/commit/bc0f17c18fe828faabfd6e4b027f5b75b9f1a034))
* **stage:** 修复辅助线显隐的bug ([f416530](https://github.com/Tencent/tmagic-editor/commit/f416530d382ee48678d26fdcd58a6ee9426be865)), closes [#444](https://github.com/Tencent/tmagic-editor/issues/444)


### Features

* **editor,stage:** 在画布中支持选择父组件 ([11e0e04](https://github.com/Tencent/tmagic-editor/commit/11e0e04cbdf3bcde2ea3fdbe113cba0a91406f53)), closes [#403](https://github.com/Tencent/tmagic-editor/issues/403)
* **form:** formDialog支持zIndex props ([f6b7e8d](https://github.com/Tencent/tmagic-editor/commit/f6b7e8dad8a012a5446f35fcb5c1e9c744af05b8))
* **table:** action 支持icon，text支持函数 ([a065552](https://github.com/Tencent/tmagic-editor/commit/a06555268fb26c734aca4343c80deb1617f6bd45))



# [1.2.0-beta.7](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.6...v1.2.0-beta.7) (2022-10-17)


### Bug Fixes

* **design:** input slot 出错 ([d2eaecf](https://github.com/Tencent/tmagic-editor/commit/d2eaecfaab8cdbdd22322c45356e680ac45f30d6))
* **element-plus-adapter:** tag组件写成了tabs ([b965e66](https://github.com/Tencent/tmagic-editor/commit/b965e66440687de235e267c745c10ba9b5d6b32e))



# [1.2.0-beta.6](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.4...v1.2.0-beta.6) (2022-10-14)


### Bug Fixes

* **design:** tag组件获取适配组件出错 ([4369191](https://github.com/Tencent/tmagic-editor/commit/43691911b798e59ee2feb319fdb6f896cb6578d0))
* **editor:** 列框缓存失效 ([e01d5d9](https://github.com/Tencent/tmagic-editor/commit/e01d5d913fb16f7e615d7c352b73c8df660652fe))
* **editor:** 多选后拖动，组件树会收缩 ([4041029](https://github.com/Tencent/tmagic-editor/commit/40410292d73c38525c2f20da5ab6a75302e5a171))
* **editor:** 拖动改变左右列宽，不能让中间区域宽度小于0 ([0444f68](https://github.com/Tencent/tmagic-editor/commit/0444f68f3a34615b5cb5d978fdec9d959d8d8a3b))
* **editor:** 设置高亮节点操作一定要在刷新展开状态之后，否则可能导致设置的高亮无效 ([2c31caf](https://github.com/Tencent/tmagic-editor/commit/2c31caf34f740470a313314112798f7aae2a020c)), closes [#404](https://github.com/Tencent/tmagic-editor/issues/404)
* **table:** type 为selection只能是table下的children，不能是children的children ([a6ecbb6](https://github.com/Tencent/tmagic-editor/commit/a6ecbb66d1808ece12fd299f0e73577eb2cc5f68))



# [1.2.0-beta.5](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.4...v1.2.0-beta.5) (2022-10-12)


### Bug Fixes

* **design:** tag组件获取适配组件出错 ([4369191](https://github.com/Tencent/tmagic-editor/commit/43691911b798e59ee2feb319fdb6f896cb6578d0))
* **editor:** 列框缓存失效 ([e01d5d9](https://github.com/Tencent/tmagic-editor/commit/e01d5d913fb16f7e615d7c352b73c8df660652fe))
* **editor:** 拖动改变左右列宽，不能让中间区域宽度小于0 ([0444f68](https://github.com/Tencent/tmagic-editor/commit/0444f68f3a34615b5cb5d978fdec9d959d8d8a3b))



# [1.2.0-beta.4](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.3...v1.2.0-beta.4) (2022-10-12)



# [1.2.0-beta.3](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.2...v1.2.0-beta.3) (2022-10-12)


### Bug Fixes

* **stage:** 页面布局修改为流式布局后，组件宽可以设置到边框之外 ([b77cf10](https://github.com/Tencent/tmagic-editor/commit/b77cf108cd28d6d941d389f2a59462716c6d4207)), closes [#395](https://github.com/Tencent/tmagic-editor/issues/395)


### Features

* **design:** 新增TMagicDesign，用于适配不同的ui框架 ([e2d7841](https://github.com/Tencent/tmagic-editor/commit/e2d784176b48cff33518328f23b155a0128bbf1d)), closes [#401](https://github.com/Tencent/tmagic-editor/issues/401)
* **design:** 默认使用element-plus ([476e715](https://github.com/Tencent/tmagic-editor/commit/476e715982597cd56e5ff58e2adf44198e81903f))
* **editor:** editor使用tmagic-design ([63c61ca](https://github.com/Tencent/tmagic-editor/commit/63c61caccc99873868f02ccf7875ae6f1ce1d4a8)), closes [#401](https://github.com/Tencent/tmagic-editor/issues/401)
* **editor:** 支持通过左侧组件树进行组件多选 ([e3b7f58](https://github.com/Tencent/tmagic-editor/commit/e3b7f587ee002f730e2e1b592f56d07f21de92bb)), closes [#404](https://github.com/Tencent/tmagic-editor/issues/404)
* **element-plus-adapter:** 新增element-plus ui适配器 ([c613b12](https://github.com/Tencent/tmagic-editor/commit/c613b12f110dc4b46f4343cda75149543bc0c82c)), closes [#401](https://github.com/Tencent/tmagic-editor/issues/401)
* **form:** checkboxGroup options支持函数配置 ([6d432ba](https://github.com/Tencent/tmagic-editor/commit/6d432ba1da4783607bbbfc22bed50433a90f0fa6))
* **form:** 剥离element-plus依赖，使用tamgic-design ([3a1a979](https://github.com/Tencent/tmagic-editor/commit/3a1a9795f6335533d914098e7c46dae1258681f3)), closes [#401](https://github.com/Tencent/tmagic-editor/issues/401)
* **playground:** 使用@tamgic/design ([36f396a](https://github.com/Tencent/tmagic-editor/commit/36f396ac2452605192a04a8253204f82d062f6c0)), closes [#401](https://github.com/Tencent/tmagic-editor/issues/401)
* table切换成TMagicDesign ([32a24ad](https://github.com/Tencent/tmagic-editor/commit/32a24ad578b8f43b56b2c251c53eb3cfb78f2c56))



# [1.2.0-beta.2](https://github.com/Tencent/tmagic-editor/compare/v1.2.0-beta.1...v1.2.0-beta.2) (2022-09-28)


### Bug Fixes

* **editor:** codeblock slot参数修改 ([2ac3645](https://github.com/Tencent/tmagic-editor/commit/2ac3645bb028335bd4354e1b3e57be42ff1311d4))
* **editor:** slot修改,schema声明修改 ([0baec3e](https://github.com/Tencent/tmagic-editor/commit/0baec3e532011b6ae8d019e311d471d4be76ef51))
* **editor:** 修复warning,修改playground dsl codeBlocks字段 ([85951de](https://github.com/Tencent/tmagic-editor/commit/85951de24d88957c89483525ed49b5263cb31a8b))
* **editor:** 修复初始dsl无codeBlocks字段时无法新增的问题 ([3bb8ecc](https://github.com/Tencent/tmagic-editor/commit/3bb8ecc97547e9a7838b97b1a182c371efb01a6c))
* **eidtor:** cr问题修改 ([551da1a](https://github.com/Tencent/tmagic-editor/commit/551da1a64b3402cec3ce89e304cae905f702a250))
* **runtime:** 切换设计窗体大小时，同时修改app ([b3bae36](https://github.com/Tencent/tmagic-editor/commit/b3bae36d942f00f9039c5bb6b7124668fd8278d7))
* **stage:** 旋转、缩放组件后没有更新dsl ([bbb5927](https://github.com/Tencent/tmagic-editor/commit/bbb5927e0c78c482a602d15fda8e8cd6ba0a1058))
* **table:** action display ([6a65ab8](https://github.com/Tencent/tmagic-editor/commit/6a65ab812b16deda5e7dcb59f7af8400866978eb))


### Features

* **editor:** code组件新增height配置 ([c87e3b2](https://github.com/Tencent/tmagic-editor/commit/c87e3b2164d7520df1d14d997e94e411d176b89c))
* **editor:** code组件新增options props ([1c35650](https://github.com/Tencent/tmagic-editor/commit/1c3565035c854bf6259077840a5557b9bae8b70d))
* **editor:** 导出CodeBlockList组件 ([caa4782](https://github.com/Tencent/tmagic-editor/commit/caa47823be599ba33679412085b6b35b41c43b29))
* **editor:** 导出CodeSelect组件 ([869b9f2](https://github.com/Tencent/tmagic-editor/commit/869b9f23cb959826eab3d7b1577a26fbb611d45e))
* **form:** form-dialog重新打开是form重新渲染 ([6cf1f86](https://github.com/Tencent/tmagic-editor/commit/6cf1f8636c2ecdad926883f80544d164c4c26bd0))


### Reverts

* Revert "fix(editor): codeblock slot参数修改" ([84b24f1](https://github.com/Tencent/tmagic-editor/commit/84b24f11b84a220966a36ed553192560710db711))



# [1.2.0-beta.1](https://github.com/Tencent/tmagic-editor/compare/v1.1.6...v1.2.0-beta.1) (2022-09-22)


### Bug Fixes

* **core:** 修复执行代码块的顺序问题 ([c3b5022](https://github.com/Tencent/tmagic-editor/commit/c3b502254b4cfac5f14af9173a6e1737732c1745))
* **editor:** dsl存储代码块的字段改为methods ([fa01497](https://github.com/Tencent/tmagic-editor/commit/fa0149773fb8435c099bb98eb91657c70e7599e3))
* **editor:** icon使用editor封装的icon组件 ([441a412](https://github.com/Tencent/tmagic-editor/commit/441a412817f01a1847b48dc4423c0d740a77f749))
* **editor:** 代码块删除支持传参处理失败逻辑,ts类型修复 ([896f92b](https://github.com/Tencent/tmagic-editor/commit/896f92b5a88729f3178c3556932e761a9fcd37c0))
* **editor:** 修复从dsl初始化时代码块绑定关系未同步的问题 ([2356ff5](https://github.com/Tencent/tmagic-editor/commit/2356ff514d0a8019cac8b2b57fdbac29495200e0))
* **editor:** 修复从dsl初始化时代码块绑定关系未同步的问题,修复一些warning,优化语法报错时保存并关闭的交互逻辑 ([134efbf](https://github.com/Tencent/tmagic-editor/commit/134efbfb0f2eed8e536cc17ed6d1add260e5bd43))
* **editor:** 修复语法报错 ([8b9ac82](https://github.com/Tencent/tmagic-editor/commit/8b9ac826fcf624f65c30197f5b6757e74d45dbd6))
* **editor:** 修复通过dsl初始化代码块时,点击查看获取不到绑定的代码块的问题 ([4e6fbab](https://github.com/Tencent/tmagic-editor/commit/4e6fbab26de062a3784bf3c89c24850ef910f109))
* **editor:** 修改样式,修改代码块ID生成逻辑 ([a452cec](https://github.com/Tencent/tmagic-editor/commit/a452cecc444a155efa1a7a25391125b03677ffe7))
* **editor:** 导出CodeBlockList组件 ([8a9971a](https://github.com/Tencent/tmagic-editor/commit/8a9971ab7b4dc1e43a407af0a5ce0b47bed7c6ec))
* **editor:** 样式优化 ([27d8640](https://github.com/Tencent/tmagic-editor/commit/27d8640fbc48184e4f73aac180f4f35638f92a1a))
* **editor:** 样式修改,editor pannel使用resize组件 ([c2637b1](https://github.com/Tencent/tmagic-editor/commit/c2637b1b0cb10dd2f6ee2199916d3881a9d0f071))
* **editor:** 绑定关系组件增加option来源的默认逻辑 ([ddd22ff](https://github.com/Tencent/tmagic-editor/commit/ddd22ff486c28bbc55d86190f263648ebf32f94f))
* **editor:** 绑定关系组件支持单选配置 ([7b961f1](https://github.com/Tencent/tmagic-editor/commit/7b961f128424c95ca20a9c4fbe3290f114ab865b))
* **editor:** 解决修改代码名称后已选择的select tag不更新的问题,优化一些样式 ([bc000e9](https://github.com/Tencent/tmagic-editor/commit/bc000e9ca606ea744a2ecf4da58b2aa71681c38b))
* **editor:** 默认展开组件列表 ([37181d3](https://github.com/Tencent/tmagic-editor/commit/37181d3084a9735e7a54d50b00632cd99e3da288))
* **stage:** 修复ctrl+tab切到其他窗口引起多选状态混乱的问题 ([09c9af8](https://github.com/Tencent/tmagic-editor/commit/09c9af8454babbebe7cb5e076d62025527eeff80))


### Features

* **core:** 修改core生命周期钩子处理逻辑,执行对应的代码块 ([310ee32](https://github.com/Tencent/tmagic-editor/commit/310ee32d75bc9d87c8558be3c35be971716aec9a))
* **editor):** 组件绑定代码块form表单配置 ([7020ab4](https://github.com/Tencent/tmagic-editor/commit/7020ab4a1fcc50a9ad90c7688545c5292c505918))
* **editor:** codeBlockService.getCodeDsl支持增加是否强制刷新参数 ([fc749b7](https://github.com/Tencent/tmagic-editor/commit/fc749b7375af33a1c7cf8d4323e2f220164917d9))
* **editor:** codeBlockService暴露一些方法支持hook,默认设置代码块到dsl的method字段 ([5b220a0](https://github.com/Tencent/tmagic-editor/commit/5b220a0e061e2a54ff87703eccb33954276844a4))
* **editor:** 代码块service封装完成 ([7640c06](https://github.com/Tencent/tmagic-editor/commit/7640c06ccb554b3ff28b65ee551cebfccc1c5f53))
* **editor:** 代码块功能增加删除,完善一些边界情况的交互 ([2f803c9](https://github.com/Tencent/tmagic-editor/commit/2f803c963a8c02b1244387c435e6e01ccdee183a))
* **editor:** 代码块功能新增slot ([452c80d](https://github.com/Tencent/tmagic-editor/commit/452c80d829e3e127a51ac9c5cb1356bc4eafba61))
* **editor:** 代码块新增,编辑器保存至dsl ([0c2c33f](https://github.com/Tencent/tmagic-editor/commit/0c2c33f85431e29e0857ed1d755772acb7deaa6c))
* **editor:** 代码块绑定功能完成 ([0c25cf7](https://github.com/Tencent/tmagic-editor/commit/0c25cf795fa44e97bc98b75aa37c11e3505789e8))
* **editor:** 代码块编辑区改为使用弹窗,代码块slot完善 ([f1242ee](https://github.com/Tencent/tmagic-editor/commit/f1242ee3f46ca2ba7df2c88033772680f74aaf9e))
* **editor:** 增加代码块搜索,代码编辑器同步设置是否可编辑属性,修复不可编辑状态下弹窗无法关闭的问题 ([9e1fb42](https://github.com/Tencent/tmagic-editor/commit/9e1fb42783afa05849bde8a9e27082a02d9ff69a))
* **editor:** 导出codeBlockService ([25d9de1](https://github.com/Tencent/tmagic-editor/commit/25d9de10e26e71c1e7ca73ab128bf829245a0c56))
* **editor:** 支持代码块维度查看与组件的绑定关系,并支持从代码块列表解除绑定 ([bfaa831](https://github.com/Tencent/tmagic-editor/commit/bfaa8317e36db9c0387e041820f075a98a3887b5))
* **editor:** 新增,编辑代码块完成 ([2a8cfe5](https://github.com/Tencent/tmagic-editor/commit/2a8cfe58c4c0b86d48b759f92665bb4705cd1530))
* **editor:** 暂时隐藏代码块列表删除组件功能,支持点击组件tag定位到组件 ([0b3585c](https://github.com/Tencent/tmagic-editor/commit/0b3585c150505dfa93c86d5421b392f2551e2579))
* **editor:** 组件代码块的绑定关系记录到dsl中,修复删除组件解除关系的问题,代码块dsl支持扩展字段 ([92f3696](https://github.com/Tencent/tmagic-editor/commit/92f3696e4432b70bdd2d9ab5de36f9f3df0238c3))
* **form:** select动态监听事件优化 ([040d5d0](https://github.com/Tencent/tmagic-editor/commit/040d5d0d2c7f5a857c7d57e56dd6050940f62e4a))



## [1.1.6](https://github.com/Tencent/tmagic-editor/compare/v1.1.5...v1.1.6) (2022-09-22)


### Bug Fixes

* **core:** 保证传参行为一致 ([b0419cd](https://github.com/Tencent/tmagic-editor/commit/b0419cdbaf8fab2ea17edd650fb10155913e69f7))
* **core:** 修复emit 无node时的情况 ([34b628c](https://github.com/Tencent/tmagic-editor/commit/34b628cc07100b33dab462d19b299fbb4ad11676))
* **core:** 修复多组件同一事件监听问题修改后导致的共通点击失效问题 ([a96d547](https://github.com/Tencent/tmagic-editor/commit/a96d547c20b1c808d5399dcb0435b56513b759ac))
* **editor:** layer-node-content slot参数出错 ([4643acb](https://github.com/Tencent/tmagic-editor/commit/4643acb0f8c67c0bdb0fabecd5bf10e262a81aa1))


### Features

* **cli:** 添加dynamicImport配置参数，用于设置是否使用import()来加载组件 ([c817ad6](https://github.com/Tencent/tmagic-editor/commit/c817ad6bb680a84453ef3d99de14c8d8a36b1f58)), closes [#366](https://github.com/Tencent/tmagic-editor/issues/366)
* **editor:** 新增layer-node-content slot,用于定制组件树节点 ([cda0c41](https://github.com/Tencent/tmagic-editor/commit/cda0c41ad499e5e8ec7b66ddaae607ad96633c5a)), closes [#368](https://github.com/Tencent/tmagic-editor/issues/368)
* **form:** table新增showIndex配置，用于控制是否显示行索引 ([560a3ac](https://github.com/Tencent/tmagic-editor/commit/560a3acfae2e467faa894ed16067ebeb941c6fef))
* **form:** table配置支持showIndex用于控制行号 ([eb03ce3](https://github.com/Tencent/tmagic-editor/commit/eb03ce358fd1ccaeb1b2f82285804d1c24349262))
* **runtime:** vue3使用dynamicImport ([a16a7e6](https://github.com/Tencent/tmagic-editor/commit/a16a7e6a4d8a072ca94f5c2c50a17bfbf70279af))



## [1.1.5](https://github.com/Tencent/tmagic-editor/compare/v1.1.4...v1.1.5) (2022-09-20)


### Bug Fixes

* **core:** 多个组件配置同一事件会导致此事件多次监听 ([b835bb2](https://github.com/Tencent/tmagic-editor/commit/b835bb24888db3ee150192ef10726de8f7c5ec3b)), closes [#356](https://github.com/Tencent/tmagic-editor/issues/356)
* **editor:** code-link组件内容不更新 ([e069783](https://github.com/Tencent/tmagic-editor/commit/e0697833dab7b2b3850b955312ca1e71379cf848))
* **editor:** layout ([30bb39d](https://github.com/Tencent/tmagic-editor/commit/30bb39d71ae481cc55c3c98824e74f502f48a23d))
* **editor:** 添加组件后，只有在位置有调整的情况才再次更新组件 ([22c57f4](https://github.com/Tencent/tmagic-editor/commit/22c57f444fdf760bfcfa1d5a72303109609bbb2c))
* **form:** link组件parentValues没有传递下去 ([d76c753](https://github.com/Tencent/tmagic-editor/commit/d76c753483c085afc7b062a240fa0e89450ba910))
* **playgound:** npm run serve后runtime无法打开 ([ddf0fcd](https://github.com/Tencent/tmagic-editor/commit/ddf0fcdecce14a924ffbd3690a36fff467ca98bc)), closes [#352](https://github.com/Tencent/tmagic-editor/issues/352)
* **playground:** npm run dev后proxy失效 ([6d6490a](https://github.com/Tencent/tmagic-editor/commit/6d6490ab311696e1b525f73d994837a04bd08d10))


### Features

* **editor:** 新增Layout ([835189a](https://github.com/Tencent/tmagic-editor/commit/835189adc9c0047bdedc31ae0367c08c1cf6024d))



## [1.1.4](https://github.com/Tencent/tmagic-editor/compare/v1.1.3...v1.1.4) (2022-09-15)


### Bug Fixes

* **editor:** 添加页面，应该添加到最后 ([10d2b3c](https://github.com/Tencent/tmagic-editor/commit/10d2b3cc9b5460ee4c406ca731520ffc2d1906ef))
* **editor:** 画布大小变化，滚动条重置 ([bee9f92](https://github.com/Tencent/tmagic-editor/commit/bee9f92abbb6a673bf5185c79431cb7ad2fbd81f))
* **editor:** 页面列表是否可以滚动判断不准确 ([3ff823a](https://github.com/Tencent/tmagic-editor/commit/3ff823a59fd5c4afb6c36d4a9e150365a7801258))
* **stage:** 当选中的组件与上一次选中的组件有重叠时，选中后的下一个click事件丢失 ([33a09cc](https://github.com/Tencent/tmagic-editor/commit/33a09cccc7548a1264daaec9b77c3ff924b2969b))
* **ui:** 修复text组件在流式容器内无宽高问题 ([695efc0](https://github.com/Tencent/tmagic-editor/commit/695efc00a8c5c4dfc88dbcb3ce71db6dbc1656f7))
* **ui:** 追加 vue2 和 react 的修改 ([45be838](https://github.com/Tencent/tmagic-editor/commit/45be838f20c784e946a6e5cd3ea0bfc3a3741b67))


### Features

* **editor:** uiService支持插件扩展 ([b915acc](https://github.com/Tencent/tmagic-editor/commit/b915accb7155ce3155ee3076d2d848ea1dd65f3e))
* **table:** 添加loading参数 ([ee36127](https://github.com/Tencent/tmagic-editor/commit/ee361271e70565a413985388da501dac2e769c4b))



## [1.1.3](https://github.com/Tencent/tmagic-editor/compare/v1.1.2...v1.1.3) (2022-09-13)


### Bug Fixes

* **editor:** 修复流式布局下移动图层操作相反问题 ([e0a16bc](https://github.com/Tencent/tmagic-editor/commit/e0a16bcf0a1b87932137567e711beb7f0e463848))
* **form:** 当默认值为0时，select 远程选项初始化不正确 ([e855072](https://github.com/Tencent/tmagic-editor/commit/e8550728d1f58c55deb9d5c26bd5942a9adf9720))



## [1.1.2](https://github.com/Tencent/tmagic-editor/compare/v1.1.1...v1.1.2) (2022-09-08)


### Bug Fixes

* **editor:** 画布缩放后，拖入组件位置错位 ([bdd544e](https://github.com/Tencent/tmagic-editor/commit/bdd544e87e7c4f4b227d65f3afd4de14af826e17))


### Features

* **editor:** 支持控制pagebar中新增按钮显隐 ([3e024d2](https://github.com/Tencent/tmagic-editor/commit/3e024d21edca7dc3bcc00b8aae23b231ee8e1a54))
* **editor:** 添加compoent-list-item slot ([c307386](https://github.com/Tencent/tmagic-editor/commit/c3073861907abb01b57b9632bb9c2c9108203379))



## [1.1.1](https://github.com/Tencent/tmagic-editor/compare/v1.1.0...v1.1.1) (2022-08-31)


### Bug Fixes

* **core:** 解决固定元素失效问题 ([8db7821](https://github.com/Tencent/tmagic-editor/commit/8db7821032080cdcc74a5e8412d05bc978793932))
* **editor:** 没有页面时，添加页面出错 ([e67cbce](https://github.com/Tencent/tmagic-editor/commit/e67cbceb7d4d1a047e9849a171045e85661ae71f))



# [1.1.0](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.13...v1.1.0) (2022-08-30)


### Bug Fixes

* **editor,stage,ui,runtime:** 流式布局下，height自动设置成auto ([2201fbe](https://github.com/Tencent/tmagic-editor/commit/2201fbe80c5e14254c4f5746f1b82209711aef5e)), closes [#298](https://github.com/Tencent/tmagic-editor/issues/298)
* **editor:** 添加remove事件时的参数 ([3af6f11](https://github.com/Tencent/tmagic-editor/commit/3af6f11f9f851accd396e917ecb4f03dd7bb2162))
* **stage:** 流式布局resize从上或者左边调整，选中框出现错位 ([9e16747](https://github.com/Tencent/tmagic-editor/commit/9e167474a2ff2f937e1e0c3861bf8451f19cbc48)), closes [#297](https://github.com/Tencent/tmagic-editor/issues/297)


### Features

* **editor:** 创建新组件时的顺序 ([#316](https://github.com/Tencent/tmagic-editor/issues/316)) ([6c0b92e](https://github.com/Tencent/tmagic-editor/commit/6c0b92e80887f10c92ee9ecf450ebca4a0bc2fec))
* **editor:** 编辑器销毁后销毁services ([4a59b4b](https://github.com/Tencent/tmagic-editor/commit/4a59b4b0f49a6e608361980723429b1f362a82c1))
* **stage:** 多选支持resize ([793d02a](https://github.com/Tencent/tmagic-editor/commit/793d02a7067f59806655938aaa35a34e23dcbb75)), closes [#302](https://github.com/Tencent/tmagic-editor/issues/302)



# [1.1.0-beta.13](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.12...v1.1.0-beta.13) (2022-08-29)


### Features

* **editor:** 去掉画布根据视窗大小自动调整缩放比例，加上缩放到实际大小/缩放以适应菜单按钮 ([dd3075b](https://github.com/Tencent/tmagic-editor/commit/dd3075be56a08c1e10b20f48260546d2ad438510))
* **editor:** 画布添加滚动条 ([de8ef8d](https://github.com/Tencent/tmagic-editor/commit/de8ef8dc58d686adfd940f5be2de5b4285339606)), closes [#262](https://github.com/Tencent/tmagic-editor/issues/262)



# [1.1.0-beta.12](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.11...v1.1.0-beta.12) (2022-08-24)


### Bug Fixes

* **editor:** 上移一层通知runtime更新参数出错 ([9b9c9db](https://github.com/Tencent/tmagic-editor/commit/9b9c9db683596958803b02e11cc055b2660127a0)), closes [#282](https://github.com/Tencent/tmagic-editor/issues/282)
* **editor:** 修复 update 返回值三目运算符判断错误的问题，同时优化输入与输入类型一致。 ([9b0db4a](https://github.com/Tencent/tmagic-editor/commit/9b0db4a8071ec511f03131a604157584be3b7f55))
* **editor:** 修复Add返回数组还是对象的逻辑 ([547e733](https://github.com/Tencent/tmagic-editor/commit/547e733c655872e6039dda9958f628fce799b187))
* **editor:** 拖拽改变父容器时错乱现象 ([#296](https://github.com/Tencent/tmagic-editor/issues/296)) ([f3c9ba4](https://github.com/Tencent/tmagic-editor/commit/f3c9ba475ff5484ecbf69b533d04bb6129a7629f))
* **editor:** 组件属性表单配置默认值 ([5529bbc](https://github.com/Tencent/tmagic-editor/commit/5529bbc6e162def24fbdfcbf89936318c0f9e945))


### Features

* **editor:** propsService添加fillConfig方法，支持扩展 ([31029bc](https://github.com/Tencent/tmagic-editor/commit/31029bc8f1178e3eb1450c779253ed17bcc93bf0))
* **editor:** 添加stage slot ([98bc4e2](https://github.com/Tencent/tmagic-editor/commit/98bc4e2dbb6082dfc66f5248b079a521fb1f7725))



# [1.1.0-beta.11](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.10...v1.1.0-beta.11) (2022-08-19)


### Bug Fixes

* **cli:** window下路径分隔符\转换为/ ([4e4cae4](https://github.com/Tencent/tmagic-editor/commit/4e4cae4a7773b0916c9ed3cfd5549ce6b0077c8e)), closes [#286](https://github.com/Tencent/tmagic-editor/issues/286)
* **editor:** 解决UISelect控制台警告 ([#289](https://github.com/Tencent/tmagic-editor/issues/289)) ([0536ac2](https://github.com/Tencent/tmagic-editor/commit/0536ac29ae21b06fd8bbe1c31d6c9f1bf464efb8))
* **ui,runtime:** 组件注册默认以magic-ui-xx的形式，不再需要在组件中设置name ([de38035](https://github.com/Tencent/tmagic-editor/commit/de380357ee45f74e35465bb48e5447720116fd42)), closes [#291](https://github.com/Tencent/tmagic-editor/issues/291)


### Features

* **admin:** 更新runtime ([aed4b42](https://github.com/Tencent/tmagic-editor/commit/aed4b42191a9b5c2d856cb850eaf100cce55ce9f))
* **cli:** 添加onInit/onPrepare配置 ([87f1bfb](https://github.com/Tencent/tmagic-editor/commit/87f1bfbdd659172ec493cda9111bad049bc4bc73))
* **editor:** 记住组件树节点展开的状态 ([143bded](https://github.com/Tencent/tmagic-editor/commit/143bded648ddf07d3ab8ab78c7108f4a8f545f7d)), closes [#283](https://github.com/Tencent/tmagic-editor/issues/283)



# [1.1.0-beta.10](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.9...v1.1.0-beta.10) (2022-08-17)


### Bug Fixes

* **editor:** react runtime中添加没有即使渲染 ([9d2e221](https://github.com/Tencent/tmagic-editor/commit/9d2e2210d1dc8398a301df74bd9360c60c216317))
* **editor:** 复制页面错误 ([5f0e421](https://github.com/Tencent/tmagic-editor/commit/5f0e421550717eb8709cf3a11aeb8ce4396eb2ca))
* **form:** text按方向键减到负数后，继续按方向键无效 ([e1c0614](https://github.com/Tencent/tmagic-editor/commit/e1c061426533473f9911e56b2c64b08a6f52f57e)), closes [#261](https://github.com/Tencent/tmagic-editor/issues/261)
* **playground,runtime:** 拖动添加弹窗时初始位置不对 ([41a8400](https://github.com/Tencent/tmagic-editor/commit/41a84000956fea8d73fdf171df4a232cec4ca99c))


### Features

* **cli:** 自动install组件包，支持pnpm,npm,yarn ([c19afda](https://github.com/Tencent/tmagic-editor/commit/c19afda58c0cc34312a4eb5950382f9e3e092c6f))
* **core:** 旋转角度支持配置不带单位的数值 ([b1bd7a8](https://github.com/Tencent/tmagic-editor/commit/b1bd7a870e748890c176339460176cd7deb2d2e6)), closes [#260](https://github.com/Tencent/tmagic-editor/issues/260)
* **editor,stage:** runtime-api中的add/update/remove中的参数加上parentId ([59e6aff](https://github.com/Tencent/tmagic-editor/commit/59e6aff70a288c69197a85f08373abd1400f78a2))
* **editor:** runtime add api中parent参数加回去 ([2cde4bb](https://github.com/Tencent/tmagic-editor/commit/2cde4bb5a016d22ac184014d7b45b55cd0e75631))



# [1.1.0-beta.9](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.8...v1.1.0-beta.9) (2022-08-12)


### Bug Fixes

* **editor:** 删除节点后，标记父节点为修改状态 ([0e82f65](https://github.com/Tencent/tmagic-editor/commit/0e82f652a9c72acbd9fae4e96d709e3fa594e411))
* **editor:** 水平居中添加了两个历史堆栈 ([8827743](https://github.com/Tencent/tmagic-editor/commit/882774311a8245769de92d68d3d43b523e85e571))
* **playground:** pc预览适配 ([31d60eb](https://github.com/Tencent/tmagic-editor/commit/31d60eb1bac7efb215fe9a613b6c7d3d0a2e66de))
* **stage:** 修复多选组件处于拖拽状态时画布组件命中高亮的问题，优化多选拖拽体验 ([#265](https://github.com/Tencent/tmagic-editor/issues/265)) ([8f5acff](https://github.com/Tencent/tmagic-editor/commit/8f5acff0a64925dff8913e50c067543128130d27))
* **stage:** 修复非多选状态下，点击选中组件切换为普通选中状态 ([#254](https://github.com/Tencent/tmagic-editor/issues/254)) ([cf9768b](https://github.com/Tencent/tmagic-editor/commit/cf9768ba96e043f9923a7c899218567dc6646167))
* **stage:** 多选时禁止拖出边界 ([edf66cc](https://github.com/Tencent/tmagic-editor/commit/edf66cc0768149387dca0993c901b2a7489727dd))


### Features

* **cli:** 支持temp下的config.ts配置文件，该模式下的配置文件会默认被删掉 ([52973d2](https://github.com/Tencent/tmagic-editor/commit/52973d2a34237e36042da2130e7296b609f7fc0f))
* **editor,stage:** 多选支持居中操作 ([c949590](https://github.com/Tencent/tmagic-editor/commit/c949590f805b6778f4f02e873f58bde1011cbefe))
* **stage,editor:** 拖入指定容器支持配置成按住alt才开启 ([4f8ea94](https://github.com/Tencent/tmagic-editor/commit/4f8ea94ee8ed5dcf719457d243f40314e11b599b))
* **stage:** 暂时禁用多选resizable ([b1ce0be](https://github.com/Tencent/tmagic-editor/commit/b1ce0be682ef5ddfce9b71e36864bfc0c79c969f))



# [1.1.0-beta.8](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.7...v1.1.0-beta.8) (2022-08-11)


### Bug Fixes

* **editor:** icon 图片模式样式修改 ([23617a6](https://github.com/Tencent/tmagic-editor/commit/23617a63e9185e39269bacdc80186b05e1bd6709))
* **editor:** 画布右键菜单中粘贴按钮显示条件修改 ([beee67b](https://github.com/Tencent/tmagic-editor/commit/beee67b3eb99b33584e5b7df42f6f4d69b3ee8e7))
* **ui-vue2:** button,container,text formconfig补充完整 ([5ccb5f1](https://github.com/Tencent/tmagic-editor/commit/5ccb5f1ec9a1e746ca320d64b08c8024fe761e9b))


### Features

* **editor:** editorService.add支持添加多个组件 ([b6fa064](https://github.com/Tencent/tmagic-editor/commit/b6fa064b0bc11fcaa289650d932bab22b8638f04))



# [1.1.0-beta.7](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.6...v1.1.0-beta.7) (2022-08-08)


### Bug Fixes

* **editor:** uiselect没有注册 ([7de649d](https://github.com/Tencent/tmagic-editor/commit/7de649d8c4f4bd61f72f835f0431a1250850da47))
* **editor:** 修复先单击选中页面,再进行多选无法选中的问题 ([46e0e23](https://github.com/Tencent/tmagic-editor/commit/46e0e2378588d980eb2ed9b52d35c884f7cf9998))
* **editor:** 页面列表显示问题 ([a4dd4ea](https://github.com/Tencent/tmagic-editor/commit/a4dd4eac02b1656e4945d5ec5acad36881c9fc4f))
* **form:** daterange不会自动更新 ([a7057d2](https://github.com/Tencent/tmagic-editor/commit/a7057d2568f58825a92f7f2abde2763114d1d180))


### Features

* **admin:** 更新runtime ([eba6cbc](https://github.com/Tencent/tmagic-editor/commit/eba6cbccde077a98ed4cc064ca4410ae571367df))
* **core:** 新增store ([5f78bbd](https://github.com/Tencent/tmagic-editor/commit/5f78bbd7b727f320d390034f9cfce19efdf2bcb0))
* **stage:** 多选快捷键改成ctrl/cmd ([3d1a803](https://github.com/Tencent/tmagic-editor/commit/3d1a803ec9e56debc7aa1209271af6fd2753fecc))
* **utils:** moment换成dayjs ([9ac3e12](https://github.com/Tencent/tmagic-editor/commit/9ac3e12487b4a6acd49b20731b824779eac248d5))



# [1.1.0-beta.6](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.5...v1.1.0-beta.6) (2022-08-05)


### Bug Fixes

* **admin:** npm install 出错 ([259a5aa](https://github.com/Tencent/tmagic-editor/commit/259a5aa5305929a5436d2f573456976128c565a0)), closes [#207](https://github.com/Tencent/tmagic-editor/issues/207)
* **docs:** vuepress暂不支持vite3.0 ([6e19989](https://github.com/Tencent/tmagic-editor/commit/6e199897ac41695f6268a3fd3819f9d1a021521c))
* **editor:** id可能重复 ([#221](https://github.com/Tencent/tmagic-editor/issues/221)) ([a02fd2c](https://github.com/Tencent/tmagic-editor/commit/a02fd2c695ac2cd07c8025f58a31a010f2a8004b))
* **editor:** 修复添加StorageService定义导出带来的构建错误 ([2008bc7](https://github.com/Tencent/tmagic-editor/commit/2008bc7da1e24530b208840173f062c0f6f1a61f))
* **editor:** 添加组件粘贴操作支持偏移量 ([9ffecf6](https://github.com/Tencent/tmagic-editor/commit/9ffecf62f751397548da3181084c2a59b1111170))
* **stage:** 单选后，粘贴多个组件，原来的单选状态没有取消 ([a4e91fa](https://github.com/Tencent/tmagic-editor/commit/a4e91fa66daf202fbe257d7a4174e7e625a241c6))


### Features

* **cli:** 支持配置temp文件夹，默认.tmagic ([624da4c](https://github.com/Tencent/tmagic-editor/commit/624da4c29a8f11b9d40a4a20c0d38c5a8a76f33d))
* **cli:** 新增tamgic-cli,用于runtime 依赖生成 ([f18e7b2](https://github.com/Tencent/tmagic-editor/commit/f18e7b275db98d84d6eabc3291b9e7045adae44d))
* **cli:** 生成的entry文件不再在window挂对象，通过构建自动挂载 ([32fdf05](https://github.com/Tencent/tmagic-editor/commit/32fdf05eb185a3d0ffd6bba5791763ba5f3a5681))
* **editor:** 多选粘贴后同步选中粘贴的多个元素,并支持拖拽,粘贴删除支持多个元素同时撤销到上一步 ([8c64ea7](https://github.com/Tencent/tmagic-editor/commit/8c64ea798ab005a1e7e1ac97b4ef4c00602d6794))
* **editor:** 多选菜单支持复制粘贴删除 ([#217](https://github.com/Tencent/tmagic-editor/issues/217)) ([b702857](https://github.com/Tencent/tmagic-editor/commit/b702857aad4efdb7635a6ce468478c04567ebce6))
* **editor:** 完善storageService功能 ([574e03f](https://github.com/Tencent/tmagic-editor/commit/574e03f685e44d08fb43207723af79a08ee0a22f)), closes [#224](https://github.com/Tencent/tmagic-editor/issues/224)
* **editor:** 添加storageService服务 ([#225](https://github.com/Tencent/tmagic-editor/issues/225)) ([da0cb7d](https://github.com/Tencent/tmagic-editor/commit/da0cb7d6143a0a021340caa06386d212fb3ca276))
* **runtime,playground:** vue3使用tmagic-cli生成组件依赖入口 ([a57fef4](https://github.com/Tencent/tmagic-editor/commit/a57fef4947888d081c6cdbaa7b0c7b502f5e9e8f))
* **runtime:** vue2/react使用tamgic-cli生成组件依赖入口 ([e8b8d35](https://github.com/Tencent/tmagic-editor/commit/e8b8d35cbd5b37a52ae2bc17ea8e6dafb019b670))
* **stage,runtime:** 去掉runtime getSnapElements 定义 ([e5f0506](https://github.com/Tencent/tmagic-editor/commit/e5f0506a00656eaa96a91525d01b9b918780ee80))



# [1.1.0-beta.5](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.4...v1.1.0-beta.5) (2022-07-29)


### Bug Fixes

* **admin:** 升级tmagic版本,修复第一个活动第一个页面uiconfig中id和page id重复的问题 ([ec1bf1d](https://github.com/Tencent/tmagic-editor/commit/ec1bf1dcb725a2312368023f8b50535dd484ca38))
* **editor:** 已选组件树形拖放时, layout 根据父窗口动态变化 ([#210](https://github.com/Tencent/tmagic-editor/issues/210)) ([340eeb3](https://github.com/Tencent/tmagic-editor/commit/340eeb32d7620fcb58e2aa7b1ca9d8345630319b))
* **editor:** 新增组件id不对 ([fff587d](https://github.com/Tencent/tmagic-editor/commit/fff587d9eb1d614a0a936146b8c101b6aff8c08e))
* **editor:** 新增页面时会有一个error ([aa20c74](https://github.com/Tencent/tmagic-editor/commit/aa20c741313421b22f366c96cef52550b5817a10))
* **editor:** 重复import ([4ff07ea](https://github.com/Tencent/tmagic-editor/commit/4ff07ea5a93a56e278c921ae4b19b6365d5fdf74))
* **stage,runtime,ui-react:** tmagicRuntimeReady时机修改 ([9858327](https://github.com/Tencent/tmagic-editor/commit/9858327eb8ba5ca24ecb2cb60f42625b03612c5e)), closes [#198](https://github.com/Tencent/tmagic-editor/issues/198)
* **stage:** 在 stage 拖拽改变父容器的BUG ([0a1cf06](https://github.com/Tencent/tmagic-editor/commit/0a1cf060a5580ab56dd34abc0d2ad88e09c2ba91))
* 修复多选组件时新增组件的体验问题 ([a4884c5](https://github.com/Tencent/tmagic-editor/commit/a4884c504f4f8289150f3845054f0eeaf73c901e))


### Features

* **stage:** 1) 高亮边框样式加粗 ([a2fb92d](https://github.com/Tencent/tmagic-editor/commit/a2fb92d9880bc852cd630b8354a40f3378f96902))



# [1.1.0-beta.4](https://github.com/Tencent/tmagic-editor/compare/v1.1.0-beta.3...v1.1.0-beta.4) (2022-07-26)


### Bug Fixes

* **editor:** 修正css sass变量 ([940b08b](https://github.com/Tencent/tmagic-editor/commit/940b08b2c579564c3fea9a504b08237262de91a1))
* **editor:** 拖动组件到最右边会多出1px ([bf95925](https://github.com/Tencent/tmagic-editor/commit/bf9592587826fd429533de4456c82e5f7e657a94))
* **editor:** 水平居中 ([dd1ec53](https://github.com/Tencent/tmagic-editor/commit/dd1ec530642290224e7d339f14f8afa9467a62d0))
* **editor:** 画布大小与stageRect配置不相符 ([9747e0f](https://github.com/Tencent/tmagic-editor/commit/9747e0f51617f4fd440c66c4c48ada0dfbbd8ba0))


### Features

* **editor:** editorService.add 的addNode参数对象中加上inputEvent ([c1fc6b8](https://github.com/Tencent/tmagic-editor/commit/c1fc6b8f94721d00661ed7983ea1b49290f06b7d))



# [1.1.0-beta.3](https://github.com/Tencent/tmagic-editor/compare/v1.0.0-rc.7...v1.1.0-beta.3) (2022-07-25)


### Bug Fixes

* **core:** 事件触发时组件未初始化，等组件初始化后再调用事件处理 ([1750467](https://github.com/Tencent/tmagic-editor/commit/1750467d5b0407bba4c388716cd71298c49de8e6))
* **core:** 拼写错误 ([c83d83b](https://github.com/Tencent/tmagic-editor/commit/c83d83b1a15103ce94dd7e224d6c71cec9a8a27b))
* **editor:** moveableOptions默认值中的container有误 ([2377629](https://github.com/Tencent/tmagic-editor/commit/23776299a730d3c440d41be4f1101e4fb909dcf9))
* **editor:** page和container默认value加上items ([10577ae](https://github.com/Tencent/tmagic-editor/commit/10577aea68a63323bc1312faced84bcd5c616d1f))
* **editor:** 修正Editor slot 变量位置 ([ecd80cb](https://github.com/Tencent/tmagic-editor/commit/ecd80cb4a4c83ada6076a09da6a36bda6491ef47))
* **editor:** 指定父节点添加组件 ([d334b69](https://github.com/Tencent/tmagic-editor/commit/d334b697ae71ebe87286b07bdf6bf7e409ea751b))
* **editor:** 编辑器分栏左右各设置最小宽度  fix [#145](https://github.com/Tencent/tmagic-editor/issues/145) ([363330e](https://github.com/Tencent/tmagic-editor/commit/363330e07aea220e0a1efc76823ceeb810005865))
* **form:** date组件初始值 不显示 ([8d5eab0](https://github.com/Tencent/tmagic-editor/commit/8d5eab0ef821b57bc7145e9ccd2dc4db36a6f6d3))
* **form:** el-upload类型读取失败导致Table.vue.d.ts丢失 ([fab8717](https://github.com/Tencent/tmagic-editor/commit/fab8717fcf889ed8c6a4b2ee1569a5760c4ff231))
* **form:** fieldset checkbox chang事件不会触发 ([26c60c3](https://github.com/Tencent/tmagic-editor/commit/26c60c316ae688c41b9b0093ea5ee7d85fcb98af))
* **form:** tabs配置name后出错 ([9454bb3](https://github.com/Tencent/tmagic-editor/commit/9454bb3679881e7a4617ae782a17e6c51d1f12bc))
* **form:** 函数配置中添加config参数 ([7ad80e8](https://github.com/Tencent/tmagic-editor/commit/7ad80e848f81d3a96622540cce44f1fa10d9dc57))
* **form:** 函数配置中添加config参数 ([eae9725](https://github.com/Tencent/tmagic-editor/commit/eae9725ccbbdbe8ffc9ded5af42993cff21bec77))
* **form:** 初始化values时，数组中的对象出现key丢失 ([32e86d8](https://github.com/Tencent/tmagic-editor/commit/32e86d8167f85a77306d5236dc4f885fc4b7b050))
* **form:** 配置了names，validator中的value应为model ([3090bc7](https://github.com/Tencent/tmagic-editor/commit/3090bc77631e1be3974120adf48df938fd546a5e))
* **magic-admin:** 修复发布页面资源路径错误，导致页面无法打开问题 ([7dc0b4e](https://github.com/Tencent/tmagic-editor/commit/7dc0b4e26127d3b53e44465b96d2edf5c71738af))
* **magic-admin:** 画布显示出错 ([7c42f75](https://github.com/Tencent/tmagic-editor/commit/7c42f751a4042e68ad9071fed88fcfb9a13f4ef0))
* **playground:** 小屏幕下设备切换按钮样式问题 ([a4abf5f](https://github.com/Tencent/tmagic-editor/commit/a4abf5feea39300d22757003e48145065ab7672c))
* **runtime:** 解决启动脚本不识别组件包内的插件 ([8b70ede](https://github.com/Tencent/tmagic-editor/commit/8b70edeaf21b9029c9cddf8df9b2845b2a6aba05))
* **stage:** 所有父节点中如果有translate，导致选中框定位出错 ([feff617](https://github.com/Tencent/tmagic-editor/commit/feff6177c97851dbe5457d4d59222c3f045ce864))
* **stage:** 无法拖到left为0 ([069aec6](https://github.com/Tencent/tmagic-editor/commit/069aec64c152eca2a6b0508b787343aa9ceebcf6))
* 修正getScrollParent逻辑 ([#141](https://github.com/Tencent/tmagic-editor/issues/141)) ([f72b8c7](https://github.com/Tencent/tmagic-editor/commit/f72b8c7614135382bea9899a86b2ab1cb0db761b))
* 创建活动时 ([ac2aef9](https://github.com/Tencent/tmagic-editor/commit/ac2aef980c1bcc5a197b616df2480ad0b1964c93))
* 当前选中组件处于流式布局模式下时，直接拖动其他组件会错误判断成是流式组件 ([89f863d](https://github.com/Tencent/tmagic-editor/commit/89f863d873ed7e4c7a86138055a44351d77dfe32))


### Features

* **core:** 添加设计稿宽度设置(px转rem相关)，默认375，可设置为750 ([923e8ea](https://github.com/Tencent/tmagic-editor/commit/923e8ea5abcc10e46967a4f4d67d23d1965b0cf1))
* **docs:** 添加搜索 ([4e812c3](https://github.com/Tencent/tmagic-editor/commit/4e812c396de05286a990cfe8831b7cb20531b2e3))
* **editor:** 参考线缓存与页面绑定 ([fb612ea](https://github.com/Tencent/tmagic-editor/commit/fb612eaddc982ce885bfaaee4fc32e30f609d6c2))
* **editor:** 添加layer-panel/component-list-panel slot ([49c9e87](https://github.com/Tencent/tmagic-editor/commit/49c9e87d6e1c1491d71ce7c804c0d7ccdfad5b4b))
* **editor:** 添加props-panel-header slot;修改layer-panel,component-list-panel slot名称，加上-header ([e901ad4](https://github.com/Tencent/tmagic-editor/commit/e901ad4dd00d5e93b42721e4fed6f5ccdee5f8f9))
* **form:** datetime移出默认defaultTime，支持defaultTime配置 ([e1705c3](https://github.com/Tencent/tmagic-editor/commit/e1705c350e8fcd2b51ff35ec573ce08a6a307d3b))
* **form:** datetime默认的具体时刻设置为23：59:59 ([83cd101](https://github.com/Tencent/tmagic-editor/commit/83cd10159d87893d167f53f3a2218e0d18323df5))
* **form:** groundlist 函数配置增加prop/config两个变量 ([3de29e0](https://github.com/Tencent/tmagic-editor/commit/3de29e0316aa09db2e6876b0969af84b5b6c30ea))
* **playground:** 优化form/table playground ([c570370](https://github.com/Tencent/tmagic-editor/commit/c57037030d652ff160a108d632ff79b9bac97e2a))
* **playground:** 添加form、table playground入口 ([f808253](https://github.com/Tencent/tmagic-editor/commit/f80825331e373047d467bb189cc4e5857dac6dfa))
* **playground:** 添加不同设备切换 ([9f23cd6](https://github.com/Tencent/tmagic-editor/commit/9f23cd6361cce60c10178f39e133e13aa71a62ca))
* **runtime:** 支持构建magic-admin的runtime产物 ([014859f](https://github.com/Tencent/tmagic-editor/commit/014859fd2f590f63d0f52bbe95f06932ce0177b9))
* **stage:** 提供tmagicRuntimeReady message事件通知 ([def0e3e](https://github.com/Tencent/tmagic-editor/commit/def0e3ef8d3d3357d71be55dc3ca104b24fa527a))
* **ui-vue2:** 升级至vue2.7.4 ([f289388](https://github.com/Tencent/tmagic-editor/commit/f2893880b1859b7fa371220451ce5905391ba26d))
* **ui:** page 添加magic-ui-container class ([f3e2d9c](https://github.com/Tencent/tmagic-editor/commit/f3e2d9ca394d794183bccef26820020ea56da672))
* 支持将组件拖动到指定容器 ([de0c695](https://github.com/Tencent/tmagic-editor/commit/de0c6952c77fe8675c062f8237cd938531f22a82))
* 支持配置updateDragEl方法来调制选中框 ([154860c](https://github.com/Tencent/tmagic-editor/commit/154860c66c149b72537029b351401a0e90179e9c))



# [1.0.0-rc.7](https://github.com/Tencent/tmagic-editor/compare/1.0.0-beta.8...v1.0.0-rc.7) (2022-06-13)


### Bug Fixes

* **admin:** 管理端更新编辑器的使用方式 ([fe821f7](https://github.com/Tencent/tmagic-editor/commit/fe821f7d84b7a8907e588ecae1d82ceecf5634cc))
* **editor:** getLayout增加判断fixed ([8e004f9](https://github.com/Tencent/tmagic-editor/commit/8e004f9766761d0ef7bd3aeca947fc6197e321bc))
* **editor:** mac下meta + v,meta + x快捷键无效 ([76b8d23](https://github.com/Tencent/tmagic-editor/commit/76b8d2314ad8b8a0f02e045a4244a1be0635e79d))
* **editor:** root为空时异常处理 ([7d62c09](https://github.com/Tencent/tmagic-editor/commit/7d62c09c6b172cea95d8b120732b31c4c532fead))
* **editor:** ui-select样式优化 ([27a1ff8](https://github.com/Tencent/tmagic-editor/commit/27a1ff8527dacf63875c88e1bec2ca74076a43c0))
* **editor:** 从组件树选中没有渲染的组件时，需要等待组件渲染完成再初始化选中框 ([8390ba7](https://github.com/Tencent/tmagic-editor/commit/8390ba75be5b3aeff1e20b8a5d3d9ad1862a72ea))
* **editor:** 代码编辑器大小变化没有自适应大小 ([7dc5479](https://github.com/Tencent/tmagic-editor/commit/7dc54797d2b58a1b6d1053fa283ec9ccc5df498c))
* **editor:** 修复code 代码编辑器光标错乱问题 ([06b40c9](https://github.com/Tencent/tmagic-editor/commit/06b40c9c1559d56f5dccec6db4d5bf877b0a871b))
* **editor:** 修复fix布局的组件没有吸附效果问题 ([959638c](https://github.com/Tencent/tmagic-editor/commit/959638c2c5b7da0815940b50fbdb517dddfa56e9))
* **editor:** 修复pagebar文字超长换行问题 ([5350c90](https://github.com/Tencent/tmagic-editor/commit/5350c9050ceb40a222e5535805bf6703083b20e6))
* **editor:** 修复历史状态变化后，画布没有更新 ([bb5e192](https://github.com/Tencent/tmagic-editor/commit/bb5e192dcde9c064717c64b01cc1ad598112f371))
* **editor:** 修复新增组件时，组件列表配置的数据丢失问题 ([992ebbe](https://github.com/Tencent/tmagic-editor/commit/992ebbe3ce7db7a503518e3707a9d0e76164d428))
* **editor:** 修复浏览器快捷键 ([9addbdd](https://github.com/Tencent/tmagic-editor/commit/9addbddd636d8d187d1ea604148a67199348d823))
* **editor:** 修改pagebar过长无法滚动问题 ([9b849cc](https://github.com/Tencent/tmagic-editor/commit/9b849cc906db690d51a3bf02ec8cd52d888c94e1))
* **editor:** 切换组件时会连续触发两次表单初始化 ([3137350](https://github.com/Tencent/tmagic-editor/commit/31373500c27a16cfe0e7799a3dfce18616eb45b6))
* **editor:** 删除全部页面后显示异常 ([a0c3e25](https://github.com/Tencent/tmagic-editor/commit/a0c3e25edbb2096c83fa6cc6eb5c2ca1c0650cb6))
* **editor:** 删除的快捷键操作，不要对页面生效 ([9efe4f0](https://github.com/Tencent/tmagic-editor/commit/9efe4f04fc461d802fe1db82fda6120bc91800de))
* **editor:** 删除组件后，组件树不更新 ([bcbd1f5](https://github.com/Tencent/tmagic-editor/commit/bcbd1f5d376a0addc77d311ce117a18ff49ac565))
* **editor:** 右键菜单，mac触摸板上容易在菜单出现的时候触发当前鼠标位置的按钮 ([31cbe78](https://github.com/Tencent/tmagic-editor/commit/31cbe7818f2388929942a3e6377fbb41be4839b2))
* **editor:** 右键菜单粘贴的组件位置不对 ([26081ea](https://github.com/Tencent/tmagic-editor/commit/26081ea5cce0b18ccbe360259eae2f343021d753))
* **editor:** 右键菜单隐藏逻辑有问题 ([c99663a](https://github.com/Tencent/tmagic-editor/commit/c99663a3e8aa1730e3849d200dd9b441ef821c5a))
* **editor:** 在小屏幕下画布的标尺显示不全 ([1c8829f](https://github.com/Tencent/tmagic-editor/commit/1c8829fac9d99be36d80e543a15a11141de80832))
* **editor:** 复制组件后添加组件id一直是之前复制的组件的id ([6eb1f24](https://github.com/Tencent/tmagic-editor/commit/6eb1f2418a71fbdfb01834c90091911a23ba6862))
* **editor:** 复制页面，页面名称重新生成 ([c80dab8](https://github.com/Tencent/tmagic-editor/commit/c80dab835dd66e6ae294a1c6aab31146546b0343))
* **editor:** 新增service方法串行调用问题，解决连续快速拖动导致更新节点错乱问题 ([b8d352a](https://github.com/Tencent/tmagic-editor/commit/b8d352a885954e114e9071785676b6649a0dd691))
* **editor:** 新增页面不用添加历史记录 ([3dab16b](https://github.com/Tencent/tmagic-editor/commit/3dab16b2f6069bcba8153ffb21202e6218636f39))
* **editor:** 添加或者删除节点后，选中状态没有刷新 ([97fa34b](https://github.com/Tencent/tmagic-editor/commit/97fa34bbc68199bb4381a1a717ed0d2f98ab9899))
* **editor:** 添加组件默认添加到视窗中间，如果组件初始化height不是数值，则当0处理 ([663d7ce](https://github.com/Tencent/tmagic-editor/commit/663d7cee9ffd55da366b6189661f6f92b8c7a866))
* **editor:** 源代码编辑器保存快捷键阻止冒泡 ([2134d92](https://github.com/Tencent/tmagic-editor/commit/2134d92d5498d53472e978e29a618351f4410d50))
* **editor:** 由于有可选参数，所以将after hook的返回值放到第一个参数 ([9526c44](https://github.com/Tencent/tmagic-editor/commit/9526c44d1638d25d6ead686f926c80a67de2443f))
* **editor:** 组件列表中搜索栏层级问题 ([5e4b709](https://github.com/Tencent/tmagic-editor/commit/5e4b709d61dd06d2ee10a78b4b86d5be2b22ba1a))
* **editor:** 组件树右键菜单 ([8053394](https://github.com/Tencent/tmagic-editor/commit/805339422a9778fe7470334df4c8b4d963236c2f))
* **editor:** 组件树右键菜单子菜单出不来 ([be4df0f](https://github.com/Tencent/tmagic-editor/commit/be4df0fc9b8985ae7b9d6fd7a8d1402487790a12))
* **editor:** 组件树右键菜单添加组件无效 ([a320823](https://github.com/Tencent/tmagic-editor/commit/a3208239922b482189a0fd7cc86a35ae989d91fa))
* **editor:** 组件配置width为100%时，水平居中失效 ([4a19017](https://github.com/Tencent/tmagic-editor/commit/4a190176623e58095c6e323a10161b3be54b6e53))
* **editor:** 置顶,置低逻辑弄反了 ([586711b](https://github.com/Tencent/tmagic-editor/commit/586711b9bd19b2be5030a2b5302c13e946764b79))
* **form:** daterange 错误信息不会消除 ([a90777f](https://github.com/Tencent/tmagic-editor/commit/a90777f11a4e709c750e67d89762ef0239efe901))
* **form:** label width为0时隐藏label ([28d3ea0](https://github.com/Tencent/tmagic-editor/commit/28d3ea095903d647773effd419835686a75eb9a2))
* **form:** popper弹层字体大小仅在form size为small的时候设置为12px ([662a3d6](https://github.com/Tencent/tmagic-editor/commit/662a3d61ea3f8f8df42445a1c264b3c192afff07))
* **form:** row显隐不会触发 ([88cc033](https://github.com/Tencent/tmagic-editor/commit/88cc033e0d893d0c4357d3d9c7dd11a2a272a865))
* **form:** select group option key 出错导致页面卡死 [#67](https://github.com/Tencent/tmagic-editor/issues/67) ([054e836](https://github.com/Tencent/tmagic-editor/commit/054e83685997735098956b0b8f8cde269c3efcd9))
* **form:** tooltip丢失 ([2e12812](https://github.com/Tencent/tmagic-editor/commit/2e12812aace958fd8367578232a48680f4fccb2c))
* **form:** 修复select过滤本地数据出错 ([4d7b135](https://github.com/Tencent/tmagic-editor/commit/4d7b135e50ceb5d43d0edf0e5715a3fa76409d37))
* **form:** 修复text append按钮大小 ([59c0a09](https://github.com/Tencent/tmagic-editor/commit/59c0a090b87df34e6f0d7fdde44156efe689d7bb))
* **highlight:** 修复固定定位和弹窗场景下鼠标高亮偏移的问题 ([15b202a](https://github.com/Tencent/tmagic-editor/commit/15b202a9be73bbbb1f1cc67a2ce72de9717303ff))
* **playground:** 预览检查是否保存 ([f9ae10b](https://github.com/Tencent/tmagic-editor/commit/f9ae10bc9da091a18bd3032887931ac8b882dd3e))
* **runtime:** 修复window系统下npm run playground 出错问题 [#29](https://github.com/Tencent/tmagic-editor/issues/29) ([6df8ce8](https://github.com/Tencent/tmagic-editor/commit/6df8ce82a5675702f1e9b45c66696f5af85ef3d0))
* **runtime:** 编辑器中组件的样式不生效 fix [#109](https://github.com/Tencent/tmagic-editor/issues/109) ([46b2632](https://github.com/Tencent/tmagic-editor/commit/46b26328efcb8ffc4295fb648a55f0af551e2d93))
* **runtime:** 获取dsl字段出错 ([bb97c4c](https://github.com/Tencent/tmagic-editor/commit/bb97c4c6d0e0cc5f6ff617957096662f4e3878fd))
* **stage:** canSelect增加event参数 ([29a9912](https://github.com/Tencent/tmagic-editor/commit/29a99128203a34a67fd6963c007662f60f4c9a68))
* **stage:** import 了错误的log函数 ([038ef7c](https://github.com/Tencent/tmagic-editor/commit/038ef7cde467ccc80df9852b2e532d36365ccdb6))
* **stage:** 优化拖拽体验，当选中的节点变化时，重新创建moveable，如果没有变化则update状态 ([39dcd89](https://github.com/Tencent/tmagic-editor/commit/39dcd89acf8ed15fc965bd6678b5e7af21587177))
* **stage:** 修复添加组件后没有自动选中问题 ([0faabcb](https://github.com/Tencent/tmagic-editor/commit/0faabcb3ca0fdb2a1ed68e1aa783bdccc370645d))
* **stage:** 修复滚动容器大小发生变化时，导致滚动距离可能超出最大滚动值 ([f7ba716](https://github.com/Tencent/tmagic-editor/commit/f7ba716fe90cd554e1d6acd58b2856e18783c443))
* **stage:** 修复画布缩放后拖动鼠标漂移 ([759b264](https://github.com/Tencent/tmagic-editor/commit/759b26481d9ce960720627a68cd095d3087dc33b))
* **stage:** 修复鼠标移出画布后，highlight没有清除 ([9cb821c](https://github.com/Tencent/tmagic-editor/commit/9cb821c49183568ed54141746957733bc7f026f7))
* **stage:** 只有当组件不在视窗内才自动滚动，新增scrollIntoView配置 ([dbcd420](https://github.com/Tencent/tmagic-editor/commit/dbcd4201eaf90a688321f4ccd33ae7545bb578c2))
* **stage:** 流式布局下，镜像节点zindex应该比选中节点高 ([0824602](https://github.com/Tencent/tmagic-editor/commit/0824602ad2dc82e717c461bded5717856ebd72b3))
* **stage:** 页面小于画布时，滚动位置修复 ([8452daf](https://github.com/Tencent/tmagic-editor/commit/8452daf0e066c467b26fb6e3f0f35faa6cef00c7))
* **stage:** 页面高度比画布小时，滚动画布出现异常 ([94debf5](https://github.com/Tencent/tmagic-editor/commit/94debf51c0b4744e6129d47c4fa7f7878dfa255b))
* **table:** 修复table设置expand后多一列object的问题 ([57e8159](https://github.com/Tencent/tmagic-editor/commit/57e815940bb07b0971eaded9b371b8abacb8a52c))
* **ui:** default拼写错误 ([ce5ac67](https://github.com/Tencent/tmagic-editor/commit/ce5ac67b2ddb611dceeabf0d3d235f1b61423243))
* **ui:** img组件没有配置url是点击页面刷新 ([5d159ad](https://github.com/Tencent/tmagic-editor/commit/5d159ad9d8b7c1dc08ea186fbb96a76d2f9f9856))
* **uitls:** 添加package.json dependencies ([a7351c9](https://github.com/Tencent/tmagic-editor/commit/a7351c9a021b38d5fc378e44dd4f969e15b27879))
* **ui:** 页面组件无法支持event配置 ([cdabe36](https://github.com/Tencent/tmagic-editor/commit/cdabe36b9395b5b4c5e565919b5b7a3a74db8d05))
* **utils:** 判断是否为number不够严谨 ([2647ace](https://github.com/Tencent/tmagic-editor/commit/2647ace39639e248417be14b7ce9db7a2d077684))
* 修复lock文件问题 ([a1ae3dd](https://github.com/Tencent/tmagic-editor/commit/a1ae3dd88d7717ebed6afef428202f762079ca70))
* 修复node版本16安装依赖失败的问题 ([ec8867c](https://github.com/Tencent/tmagic-editor/commit/ec8867cbfd74d4bebc59a880cca7d0c2e8e8c62f))
* 修复throttle引起的问题 ([148d454](https://github.com/Tencent/tmagic-editor/commit/148d4547b0ff17628b0f5a3cc2f6fb3503460a10))
* 修复单独使用@tmagic/editor,报错无法运行的问题 ([582962f](https://github.com/Tencent/tmagic-editor/commit/582962f6df35279e08421e85066872638764e846))
* 修复快速点选拖动时有残影的问题 ([a52d25f](https://github.com/Tencent/tmagic-editor/commit/a52d25fb70172d02f88ded9070a3b26915e58a29))
* 修复组件树中hover不存在的id导致高亮边框不消失的问题 ([121498e](https://github.com/Tencent/tmagic-editor/commit/121498e81b72925b33d3fbfe913068ddd4480f6f))
* 修复缺少buffer依赖,导致单独使用@tmagic/editor出现报错,无法运行的问题 ([cb99a6f](https://github.com/Tencent/tmagic-editor/commit/cb99a6fff54ad5af622afbbc29f63c2c18f6f8ea))
* 修复页面滚动高亮偏移的问题 ([6a46f98](https://github.com/Tencent/tmagic-editor/commit/6a46f987666da3cf98c1855f6df5487aca505a3d))
* 删除无用的方法 ([4f4ed9c](https://github.com/Tencent/tmagic-editor/commit/4f4ed9c61bf40f13ac55bb6bb711891b2714fbb4))
* 升级element-plus2.2.0后,button默认样式变化 ([1486beb](https://github.com/Tencent/tmagic-editor/commit/1486beb52cf2553ebc026ed5941a8a865c483a96))
* 升级element-plus2.2.0后,sidebar动态变化后,顺序不对 ([2731609](https://github.com/Tencent/tmagic-editor/commit/2731609526d92093bfdccd660c96fbacc6f3d006))
* 管理端启动文档更新 ([86447ec](https://github.com/Tencent/tmagic-editor/commit/86447ec4a1ce1b1d69d13ef5aef2359c8e08e6bb))


### Features

* **editor): feat(editor:** 鼠标移出workpace，禁用快捷键 ([fbd7f80](https://github.com/Tencent/tmagic-editor/commit/fbd7f80c4f82122d61c9903e57c06b3fbdc6a3ef))
* **editor:** contentmenu支持扩展 ([70292b9](https://github.com/Tencent/tmagic-editor/commit/70292b92c8f9c04fa204ec50df80e831c5ee2bd5))
* **editor:** zoom 设置为button ([faa6c6d](https://github.com/Tencent/tmagic-editor/commit/faa6c6d9feb4881466f24192ef85d49334567698))
* **editor:** 修改默人属性面板宽度 ([ed9805f](https://github.com/Tencent/tmagic-editor/commit/ed9805f2b49429a176547dead0b811c9073a2116))
* **editor:** 增加editorService.move的扩展 ([b1aae65](https://github.com/Tencent/tmagic-editor/commit/b1aae6518254abfc8ff6f0183551652da101db4e))
* **editor:** 属性表单大小配置；记住编辑器分栏宽度 ([04d7725](https://github.com/Tencent/tmagic-editor/commit/04d7725db97aab9dfb6c9fae0333d1b07666e98c))
* **editor:** 支持拖拽添加组件 ([5da8601](https://github.com/Tencent/tmagic-editor/commit/5da8601f3648322882bbb562d3b45fed7f159361))
* **editor:** 新增删除、复制、粘贴、剪切快捷键操作 ([db62427](https://github.com/Tencent/tmagic-editor/commit/db62427ee96eeaa22d27cb2a1d01199c0b41ec54))
* **editor:** 新增组件自动设置到视窗中间 ([0e74970](https://github.com/Tencent/tmagic-editor/commit/0e74970bfef78d0e032c8a8bebaeedb9c141e26b))
* **editor:** 添加globalThis兼容 ([cf5e775](https://github.com/Tencent/tmagic-editor/commit/cf5e775b84fedca2fc870c74a2c709aa8dd284ea))
* **editor:** 添加常用快捷键 ([51031fe](https://github.com/Tencent/tmagic-editor/commit/51031fe8ab4396eb6785738b4f208f96a97627e0))
* **editor:** 源代码编辑器支持扩展配置 ([359fc5f](https://github.com/Tencent/tmagic-editor/commit/359fc5fdc68c5b312534ad4b76a2586baafae2dd))
* **editor:** 组件树保持展开当前选中节点的父节点 ([f896115](https://github.com/Tencent/tmagic-editor/commit/f89611588100e34461c833639742a297459f96e6))
* **editor:** 组件树增加id和type过滤 ([97a7225](https://github.com/Tencent/tmagic-editor/commit/97a722579d36db61e071eb50fd9ba72d4fce2262))
* **editor:** 选中组件，组件自动滚动到视窗内 ([50937c2](https://github.com/Tencent/tmagic-editor/commit/50937c286776794842b247b06f0751a3302a1cbf))
* **form:** number组件初始值尝试统一转换成number ([554bc4b](https://github.com/Tencent/tmagic-editor/commit/554bc4b5c10040e0ad4a834a32119bb7e63819a8))
* **form:** select options函数配置添加prop参数 ([7e216e7](https://github.com/Tencent/tmagic-editor/commit/7e216e72f234309bc1e99c9d0726bfec78c930de))
* **playground:** playground支持旋转操作 ([423059d](https://github.com/Tencent/tmagic-editor/commit/423059deacc3a958be8e099cbdc2b810f8691c86))
* **playground:** 增加字体样式配置 ([f7bca02](https://github.com/Tencent/tmagic-editor/commit/f7bca02844bb15a1bbf61156db0b2aada3fa6b5e))
* **playground:** 更新默认页面配置 ([5bfb69b](https://github.com/Tencent/tmagic-editor/commit/5bfb69b36dad2704be0c1c88b8332ddf3a282853))
* **playground:** 添加弹窗组合 ([2319df7](https://github.com/Tencent/tmagic-editor/commit/2319df727a7e0cf92641c2e512854306f20665f1))
* **schema:** type可以为undefined，默认表现由使用方自行控制 ([fe4c0fa](https://github.com/Tencent/tmagic-editor/commit/fe4c0fa2dc3642eff7b27057be4593253b470b68))
* **stage:** elementGuidelines可以配置 ([85164ec](https://github.com/Tencent/tmagic-editor/commit/85164ec43213cfb1b9ae2ac932f660f86e166e46))
* **stage:** moveable origin改为false ([fb64e07](https://github.com/Tencent/tmagic-editor/commit/fb64e078b95cdfff12f2762c3fa51413c21a2abe))
* **stage:** runtime添加getApp方法 ([0397c68](https://github.com/Tencent/tmagic-editor/commit/0397c6887a80f23e20c327aece640eef3f16ab73))
* **stage:** 增加对齐线 ([67e2ba3](https://github.com/Tencent/tmagic-editor/commit/67e2ba3825148282c2ba28df7fab06d3b2b9b102))
* **stage:** 增加当前拖动的节点的z-index ([7f3d6c5](https://github.com/Tencent/tmagic-editor/commit/7f3d6c5438bb0ab537b2c8d2eab1a129228e8f9c))
* **stage:** 支持rotate scale fix [#92](https://github.com/Tencent/tmagic-editor/issues/92) ([a9936b5](https://github.com/Tencent/tmagic-editor/commit/a9936b5276a2f5756791430036eb22d46a01cef3))
* **stage:** 本地缓存参考线，刷新页面不会清空 ([019cfc7](https://github.com/Tencent/tmagic-editor/commit/019cfc7e93dded2ac69ea53c891e97d888bb4c10))
* **stage:** 组件对齐不准确，暂时去掉 ([cb4304b](https://github.com/Tencent/tmagic-editor/commit/cb4304b6ebc2fda87b3dfa0bbe7135508f2ce74f))
* **stage:** 选中节点时，给所有父节点添加一个className ([d478289](https://github.com/Tencent/tmagic-editor/commit/d47828976a5dc3a3f46e84016e0e15b673aed278))
* **table:** action增加before配置 ([9126399](https://github.com/Tencent/tmagic-editor/commit/912639999d576c965315bb639ee8970bd4220cbd))
* **ui:** 添加二维码，图片组件 ([8c287ec](https://github.com/Tencent/tmagic-editor/commit/8c287ecaceba0e087a4cc7ff8ddb64613c0441e0))
* **util:** asyncLoadCss支持指定document ([71cfab8](https://github.com/Tencent/tmagic-editor/commit/71cfab8d4dd56b24a872d9c8dddf8a98672b36c5))
* 优化拖拽体验 ([a842c5b](https://github.com/Tencent/tmagic-editor/commit/a842c5b0ceecf2e1c1a8e2a5dc1ab8d3e486e0d6))
* 支持playground:vue2/playground:react命令 ([d84037e](https://github.com/Tencent/tmagic-editor/commit/d84037e421181b4f0866054e3dd08a569627c1c2)), closes [#82](https://github.com/Tencent/tmagic-editor/issues/82) [#68](https://github.com/Tencent/tmagic-editor/issues/68)
* 新增isPage,isNumber方法 ([9c83a54](https://github.com/Tencent/tmagic-editor/commit/9c83a540daf9fa6ad02e6d3832e218be5a4b555f))
* 新增蒙层组件 ([44aa56b](https://github.com/Tencent/tmagic-editor/commit/44aa56bd52c3ecc3b88f9b2e5b2283cb0a932fa1))
* 添加组件支持添加组合 ([5e31257](https://github.com/Tencent/tmagic-editor/commit/5e3125706c2919e0baf457141f69a9c70656ffcd))
* 编辑器支持鼠标悬停高亮组件 ([feb9ac9](https://github.com/Tencent/tmagic-editor/commit/feb9ac9a81a6805599da1d63697961c5dfbba953))



# [1.0.0-beta.8](https://github.com/Tencent/tmagic-editor/compare/1.0.0-beta.7...1.0.0-beta.8) (2022-03-29)


### Bug Fixes

* **editor:** 流式布局下，拖动后选中错误 ([393889b](https://github.com/Tencent/tmagic-editor/commit/393889b27a63bf0dd557e4d5b638de74545b1d43))
* **form:** onChange、filter、trim函数调用异常处理 ([504adcb](https://github.com/Tencent/tmagic-editor/commit/504adcb01793cb58d23a5d3cfb56da12a509de7f))
* **playground:** 新增页面默认width height 100% ([c3f4e41](https://github.com/Tencent/tmagic-editor/commit/c3f4e41cc864cd1e5c6486d34da79e4b684546c5))
* **stage:** drag的时候不update width height ([30ad850](https://github.com/Tencent/tmagic-editor/commit/30ad8502c4a1e2925afc22297e7c5ac3a8e03378))
* **stage:** render destroy后移除load事件 ([f03281a](https://github.com/Tencent/tmagic-editor/commit/f03281ac6cddd6742841f67d484eb5fca0871c4a))
* **stage:** 混合布局下拖动错乱 ([8e2d83f](https://github.com/Tencent/tmagic-editor/commit/8e2d83fec9e8b4871cee066b641e3441eddb619a))
* **stage:** 这有overflow为auto或scroll才在选中的时候设置为hidden ([8619af9](https://github.com/Tencent/tmagic-editor/commit/8619af91db25aef36e65f9c0ab8df307e7b101f4))
* **stage:** 页面默认滚动容器设置为documentElement ([4560562](https://github.com/Tencent/tmagic-editor/commit/45605625535c1aa648eae275639b8a642ff4ec3b))


### Features

* 新增select下的popper class ([8e192e7](https://github.com/Tencent/tmagic-editor/commit/8e192e7cd42df56b94f8f1093a00b6f72b41505e))


### Reverts

* Revert "Revert "refactor(stage): 升级moveable"" ([6becbda](https://github.com/Tencent/tmagic-editor/commit/6becbdaa6b6dacc453207a2bc11ce33a5190d313))



# [1.0.0-beta.7](https://github.com/Tencent/tmagic-editor/compare/1.0.0-beta.6...1.0.0-beta.7) (2022-03-18)


### Bug Fixes

* **editor:** 切换布局失效 ([42f1789](https://github.com/Tencent/tmagic-editor/commit/42f1789c1059d9e400dc327bcbfabb5807ebed97))


### Reverts

* Revert "refactor(stage): 升级moveable" ([10ed55d](https://github.com/Tencent/tmagic-editor/commit/10ed55deea0c3dc7a97ac136a4065c447aaaf52a))



# [1.0.0-beta.6](https://github.com/Tencent/tmagic-editor/compare/v1.0.0-beta.4...1.0.0-beta.6) (2022-03-17)


### Bug Fixes

* **editor:** 不允许选中跟节点 ([ca84c8f](https://github.com/Tencent/tmagic-editor/commit/ca84c8f852a69839ddcba0d92700f36b07f76be7))
* **editor:** 样式优化调整 ([12de0f5](https://github.com/Tencent/tmagic-editor/commit/12de0f541442cde8651d71982df26d39727cbd56))
* **editor:** 画布拖动容易误触 ([541a279](https://github.com/Tencent/tmagic-editor/commit/541a279fe7eda0f11c2e71a2eaf66ca19b27c66f))
* **editor:** 首次选中组件后拖动,更新节点无效 ([dee685f](https://github.com/Tencent/tmagic-editor/commit/dee685f0b33b0c44fdcfac5514a944be6731771d))
* **stage:** 修复触摸板轻触移动时拖动左键;隐藏标尺后,改变画布大小,再显示标尺,标尺变形 ([edbb552](https://github.com/Tencent/tmagic-editor/commit/edbb5521b321bc28c0504af8f86046bed893588f))



# [1.0.0-beta.4](https://github.com/Tencent/tmagic-editor/compare/3419f800ef0865a2c6d6a453143c48df5d250a24...v1.0.0-beta.4) (2022-03-14)


### Bug Fixes

* **editor:** 更新根节点出错 ([412c781](https://github.com/Tencent/tmagic-editor/commit/412c78153cc640f0c46a06314e47f66055516106))
* **form:** 优化table样式 ([3c7d756](https://github.com/Tencent/tmagic-editor/commit/3c7d756d19eff774fec5a96c1177f7c1c9095554))
* **form:** 表单配置没有变化,初始值变化时,表单发生重绘 ([979336c](https://github.com/Tencent/tmagic-editor/commit/979336c05254783225f4fc5681ef407489c41e67))
* 更新elemnt-plus2.0.2后,size的值变了,去掉Form下size prop的默认值,增加Formdialog size prop ([3419f80](https://github.com/Tencent/tmagic-editor/commit/3419f800ef0865a2c6d6a453143c48df5d250a24))
* 构建的文件名与package.json中的不匹配 ([4f4e81f](https://github.com/Tencent/tmagic-editor/commit/4f4e81f27cd48099106ca0baa15109cc22941122))


### Features

* **editor:** 画布拖动 ([de9d7d3](https://github.com/Tencent/tmagic-editor/commit/de9d7d340a62ae94f852a68f6400b5f2a690c8da))
* **editor:** 画布自适应大小 ([ab3e113](https://github.com/Tencent/tmagic-editor/commit/ab3e113904b5d0601b7a382011cbdbb8f027f6c3))
* 新增管理端demo代码 ([2bfb85b](https://github.com/Tencent/tmagic-editor/commit/2bfb85bdbfc7870b0caaf03f5aa3644a2c95b9aa))



