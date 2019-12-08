#include <string>
#include <vector>

using namespace std;

int solution(vector<int> priorities, int location) {
    int answer = 0;
    int tmp_location = location;
    while(priorities.size()) {
        bool max = true;
        int tmp = priorities.front();
        priorities.erase(priorities.begin());
        for(vector<int>::size_type i=0; i<priorities.size(); i++) {
            if(tmp < priorities[i]) {
                priorities.push_back(tmp);
                if(tmp_location == 0) tmp_location = priorities.size() - 1;
                else tmp_location--;
                max = false;
                break;
            }
        }
        if(max == false) continue;
        else {
            answer++;
            if(!tmp_location) {
                return answer;
            }
            tmp_location--;
        }    
    }
    return answer;
}