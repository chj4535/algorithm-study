
Func details($line)
  While $line+1<=$array_num-1 And StringInStr($Logarray[$line+1],"["&$log_day) <=0
   $line+=1
   If IsInt($filter/$type) Then
    _GUICtrlEdit_AppendText($gui_edit,$Logarray[$line]&@CRLF)
   EndIf
  WEnd
EndFunc
