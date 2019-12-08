function solution(record) {
  var answer = []
  let user = {}
  let cmd = []
  for(let i=0; i<record.length; i++) {
      let temp = record[i].split(' ')
      // let idx = user.findIndex(x=>x.id == temp[1])
      // if(idx<0) user.push({id: temp[1], name: temp[2]})
      // else if(temp[0] != 'Leave') user[idx].name = temp[2]
      // cmd.push({msg: temp[0], id: temp[1]})
      if(temp[0] !== 'Leave') user[temp[1]] = temp[2];
      if(temp[0] !== 'Change') cmd.push([temp[1], temp[0]]);
  }
  for(let i=0; i<cmd.length; i++) {
  //     let idx = user.findIndex(x=>x.id == cmd[i].id)
  //     if(cmd[i].msg == 'Enter')
  //         answer.push(user[idx].name+"님이 들어왔습니다.")
  //     else if(cmd[i].msg == 'Leave')
  //         answer.push(user[idx].name+"님이 나갔습니다.")
      answer.push(user[cmd[i][0]] + '님이 ' + (cmd[i][1] == 'Enter' ? '들어왔습니다.' : '나갔습니다.'))
  }
  return answer;
}