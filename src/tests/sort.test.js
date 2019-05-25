import sort from '../logic/sort';
import { expect } from 'chai';

let item = [
  {date: '2019-05-23'},
  {date: '2019-03-04'},
  {date: '2018-09-30'},
  {date: '2016-11-06'},
  {date: '2018-12-16'},
  {date: '2016-11-20'}
]

it('should sort items from new to old', () => {
  let sorted = sort(item);
  expect(sorted[0].date).to.equal('2019-05-23');
  expect(sorted[1].date).to.equal('2019-03-04');
  expect(sorted[2].date).to.equal('2018-12-16');
  expect(sorted[3].date).to.equal('2018-09-30');
  expect(sorted[4].date).to.equal('2016-11-20');
  expect(sorted[5].date).to.equal('2016-11-06');
});
