// 约定：
// title数据类型为String
// userId为主键，数据类型为Number
var data = [
  { userId: 8, title: "title1" },
  { userId: 11, title: "other" },
  { userId: 15, title: null },
  { userId: 19, title: "title2" },
];
var find = function (origin) {
    return {
        data: origin,
        where: function (conditions) {
            var key = Object.keys(conditions)[0];
            var value = conditions[key];
            if (value instanceof RegExp) {
                this.data = this.data.filter(item => value.test(item[key]));
            } else {
                this.data = this.data.filter(item => item[key] === value);
            }
            return this;
        },
        orderBy: function (key, order) {
            this.data.sort((a, b) => {
                if (order === 'desc') {
                    return b[key] - a[key];
                } else {
                    return a[key] - b[key];
                }
            });
            return this;
        },
        value: function () {
            return this.data;
        }
    };
};
// 查找 data 中，符合条件的数据，并进行排序
var result = find(data)
  .where({
    title: /\d$/,
  })
  .orderBy("userId", "desc");

console.log(result.data); // [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
