import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stream } from "@/api/streams";
import { formatTime } from "@/utils";

export interface DaySelectorInput {
  callback: any;
  streams: Stream[];
  stream: Stream | null;
}

export default function DaySelector(input: DaySelectorInput) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <FormControl
      variant="filled"
      sx={{
        m: 1,
        minWidth: 200,
        background: "var(--foreground)",
        color: "var(--text)",
      }}
    >
      <InputLabel
        shrink={true}
        id="demo-simple-select-autowidth-label"
        sx={{ background: "var(--foreground)", color: "var(--textSecondary)" }}
      >
        Select Stream
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        notched={true}
        value={input.stream?.stream_id ?? null}
        onChange={input.callback}
        autoWidth
        label="Stream"
        sx={{
          color: "var(--text)",
        }}
        MenuProps={MenuProps}
      >
        {input.streams.map((stream, i) => {
          return (
            <MenuItem key={i} value={stream.stream_id}>
              {formatTime(stream.stream_start_time)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
