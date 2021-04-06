import initCalendar, {
  switchView,
  setTodoLabels,
  getSelectedDay
} from '../../template/calendar/index';
const app = getApp();
const conf = {
  onShow: function() {
    app.globalData.refreshIndex = false;
    initCalendar({
      // multi: true, // 是否开启多选,
      // disablePastDay: true, // 是否禁选过去日期
      // defaultDay: '2018-3-6', // 初始化日历时指定默认选中日期，如：'2018-3-6' 或 '2018-03-06'
      /**
       * 选择日期后执行的事件
       * @param { object } currentSelect 当前点击的日期
       * @param { array } allSelectedDays 选择的所有日期（当mulit为true时，才有allSelectedDays参数）
       */
      afterTapDay: (currentSelect, allSelectedDays) => {
        console.log('===============================');
        console.log('当前点击的日期', currentSelect);
        console.log('当前点击的日期是否有事件标记: ', currentSelect.hasTodo || false);
        allSelectedDays && console.log('选择的所有日期', allSelectedDays);
        console.log('getSelectedDay方法', getSelectedDay());
      },
      /**
       * 日期点击事件（此事件会完全接管点击事件）
       * @param { object } currentSelect 当前点击的日期
       * @param { object } event 日期点击事件对象
       */
      // onTapDay(currentSelect, event) {
      //   console.log(currentSelect);
      //   console.log(event);
      // },
      /**
       * 日历初次渲染完成后触发事件，如设置事件标记
       */
      // afterCalendarRender() {
      //   const data = [{
      //     year: 2018,
      //     month: 6,
      //     day: 15,
      //   }, {
      //     year: 2018,
      //     month: 6,
      //     day: 18,
      //   }, {
      //     year: 2018,
      //     month: 8,
      //     day: 16,
      //   }];
      //   // 异步请求
      //   setTimeout(() => {
      //     setTodoLabels({
      //       pos: 'bottom',
      //       dotColor: '#40',
      //       days: data,
      //     });
      //   }, 1000);
      // },
    });
  },
};
Page(conf);