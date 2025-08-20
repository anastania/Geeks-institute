
from typing import List, Set, Tuple, Iterable
import itertools

Cell = Tuple[int, int] 
NEIGHBORS = [(-1,-1), (-1,0), (-1,1),
             ( 0,-1),         ( 0,1),
             ( 1,-1), ( 1,0), ( 1,1)]

def next_bounding_box(live: Set[Cell]) -> Tuple[int,int,int,int]:
    if not live:
        return 0, -1, 0, -1 
    rs = [r for r, _ in live]
    cs = [c for _, c in live]
    return min(rs), max(rs), min(cs), max(cs)

def render_grid(live: Set[Cell], rows: int, cols: int, offset_r: int = 0, offset_c: int = 0) -> str:
    lines = []
    for r in range(offset_r, offset_r + rows):
        line = []
        for c in range(offset_c, offset_c + cols):
            line.append("█" if (r, c) in live else " ")
        lines.append("".join(line))
    return "\n".join(lines)
class LifeBoard:
    def step(self) -> None:
        raise NotImplementedError
    def display(self) -> None:
        raise NotImplementedError
    def signature(self) -> Tuple:
        raise NotImplementedError
    def live_count(self) -> int:
        raise NotImplementedError

class FixedBordersBoard(LifeBoard):
    def __init__(self, rows: int, cols: int, seed: Iterable[Cell] = ()):
        self.rows = rows
        self.cols = cols
        self.grid: List[List[bool]] = [[False]*cols for _ in range(rows)]
        for r, c in seed:
            if 0 <= r < rows and 0 <= c < cols:
                self.grid[r][c] = True

    def _neighbors(self, r: int, c: int) -> int:
        cnt = 0
        for dr, dc in NEIGHBORS:
            rr, cc = r + dr, c + dc
            if 0 <= rr < self.rows and 0 <= cc < self.cols and self.grid[rr][cc]:
                cnt += 1
        return cnt

    def step(self) -> None:
        new = [[False]*self.cols for _ in range(self.rows)]
        for r in range(self.rows):
            for c in range(self.cols):
                alive = self.grid[r][c]
                n = self._neighbors(r, c)
                if alive and (n == 2 or n == 3):
                    new[r][c] = True
                elif (not alive) and (n == 3):
                    new[r][c] = True
        self.grid = new

    def display(self) -> None:
        print("\n".join("".join("█" if cell else " " for cell in row) for row in self.grid))

    def signature(self) -> Tuple:
        return tuple(tuple(row) for row in self.grid)

    def live_count(self) -> int:
        return sum(cell for row in self.grid for cell in row)

class ExpandableBoard(LifeBoard):
    def __init__(self, seed: Iterable[Cell] = (), max_size: int = 10_000):
        self.live: Set[Cell] = set(seed)
        self.max_size = max_size

    def step(self) -> None:
        counts = {}
        for r, c in self.live:
            for dr, dc in NEIGHBORS:
                pos = (r + dr, c + dc)
                counts[pos] = counts.get(pos, 0) + 1
        new_live = set()
        for pos, n in counts.items():
            if pos in self.live:
                if n == 2 or n == 3:
                    new_live.add(pos)
            else:
                if n == 3:
                    new_live.add(pos)
        clamped = set()
        for r, c in new_live:
            if abs(r) <= self.max_size and abs(c) <= self.max_size:
                clamped.add((r, c))
        self.live = clamped

    def display(self, window_rows: int = 20, window_cols: int = 40, center_on_pattern: bool = True) -> None:
        if not self.live:
            print("(no live cells)")
            return
        if center_on_pattern:
            min_r, max_r, min_c, max_c = next_bounding_box(self.live)
            pat_h = max_r - min_r + 1
            pat_w = max_c - min_c + 1
            off_r = min_r - max(0, (window_rows - pat_h)//2)
            off_c = min_c - max(0, (window_cols - pat_w)//2)
        else:
            off_r, off_c = 0, 0
        print(render_grid(self.live, window_rows, window_cols, off_r, off_c))

    def signature(self) -> Tuple:
        if not self.live:
            return tuple()
        min_r, _, min_c, _ = next_bounding_box(self.live)
        norm = tuple(sorted((r - min_r, c - min_c) for r, c in self.live))
        return norm

    def live_count(self) -> int:
        return len(self.live)

def run_game(board: LifeBoard, generations: int = 20, stop_on_repeat: bool = True, title: str = ""):
    seen = set()
    print("\n" + ("="*10) + (f" {title} " if title else " Game of Life ") + ("="*10))
    for gen in range(generations + 1):
        print(f"\nGeneration {gen}  |  live cells: {board.live_count()}")
        board.display()
        sig = board.signature()
        if stop_on_repeat:
            if sig in seen:
                print("\nState repeated — simulation stopped (stable or oscillator detected).")
                break
            seen.add(sig)
        if gen < generations:
            board.step()

def seed_block(top: int = 5, left: int = 5) -> List[Cell]:
    return [(top, left), (top, left+1), (top+1, left), (top+1, left+1)]

def seed_blinker(top: int = 5, left: int = 5) -> List[Cell]:
    return [(top, left), (top, left+1), (top, left+2)]

def seed_glider(top: int = 2, left: int = 2) -> List[Cell]:
    return [(top, left+1),
            (top+1, left+2),
            (top+2, left), (top+2, left+1), (top+2, left+2)]

if __name__ == "__main__":
    fixed_board = FixedBordersBoard(rows=15, cols=30, seed=seed_blinker(5, 10))
    run_game(fixed_board, generations=10, title="Fixed Board — Blinker")

    fixed_glider = FixedBordersBoard(rows=15, cols=30, seed=seed_glider(3, 3))
    run_game(fixed_glider, generations=30, title="Fixed Board — Glider")

    sparse_glider = ExpandableBoard(seed=seed_glider(0, 0), max_size=10_000)
    run_game(sparse_glider, generations=40, title="Expandable Board — Glider")

    sparse_block = ExpandableBoard(seed=seed_block(0, 0))
    run_game(sparse_block, generations=10, title="Expandable Board — Block (Still Life)")
