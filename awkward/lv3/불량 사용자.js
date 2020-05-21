function solution(user_id, banned_id) {
  let ret = new Set();
  function dfs(depth, user_id, banned_id, flag) {
      if(depth === banned_id.length) {
          ret.add(flag);
          return;
      }
      let s = user_id.length;
      for(let i=0; i<s; i++) {
          let reg = banned_id[depth].replace(/[*]+/g, str=>`[a-z0-9]{${str.length}}`);
          if(new RegExp(reg).test(user_id[i]) && user_id[i].length === banned_id[depth].length)
              if(!(1<<i & flag))
                  dfs(depth+1, user_id, banned_id, flag|(1<<i));
      }
  }
  dfs(0, user_id, banned_id, 0);
  return ret.size;
}