#include <iostream>
#include <algorithm>
#include <set>
#include <vector>

using namespace std;

int N,M,inp[8];
set<vector<int> > ans;

void perm(vector<int> &p, int idx, int c) {
  if(c == M) {
    ans.insert(p);
    return;
  }
  for(int i=idx; i<N; i++) {
      p[c] = inp[i];
      perm(p, i+1, c+1);
  }
}

int main() {
  vector<int> p(8);
  cin>>N>>M;
  for(int i=0; i<N; i++) cin>>inp[i];
  sort(inp, inp+N);
  perm(p, 0, 0);
  for(set<vector<int> >::iterator i=ans.begin(); i!=ans.end(); i++) {
    vector<int> arr = *i;
    for(int j=0; j<M; j++) cout<<arr[j]<<" ";
    cout<<"\n";
  }
  return 0;
}