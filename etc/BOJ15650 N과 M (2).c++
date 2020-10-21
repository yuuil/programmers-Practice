#include <iostream>

using namespace std;

int N, M;

void perm(int num, int idx, int c) {
  if(c == M) {
    for(int i=0; i<N; i++){
      if(num & (1<<i)) cout<<(i+1)<<" ";
    }
    cout<<"\n";
    return;
  }
  for(int i=idx; i<N; i++) {
    perm(num|(1<<i), i+1, c+1);
  }
}

int main() {
  cin>>N>>M;
  perm(0, 0, 0);
}