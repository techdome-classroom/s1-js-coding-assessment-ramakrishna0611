const getTotalIsles = function (grid) {


        if (!grid || grid.length === 0) {
          return 0;
      }

      const rows = grid.length;
      const cols = grid[0].length;

      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

      function dfs(row, col) {
          if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
              return;
          }
          grid[row][col] = 'W'; 

          
          for (const [dx, dy] of directions) {
              dfs(row + dx, col + dy);
          }
      }

      let  noofIslands= 0;

      
      for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
              if (grid[i][j] === 'L') { 
                  dfs(i, j);
                  noofIslands++;
              }
          }
      }

      return noofIslands;
      };

module.exports = getTotalIsles;