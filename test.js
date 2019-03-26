#include <FileConstants.au3>
#include <GUIConstantsEx.au3>
#include <GuiEdit.au3>
#include <Array.au3>;_ArrayDisplay
#include <WindowsConstants.au3>
#include <GuiStatusBar.au3>
#include <Date.au3>
#include<Constants.au3>; $TRAY_*
Local Const $msg_fileopen = "로그를 선택해주세요"
Local $msg_filepath=""

$ui_X=700
$ui_border_X=20
$ui_path_Y=30
$gui=GUICreate("Hello World", $ui_X, 900, Default, Default, $WS_SIZEBOX + $WS_CAPTION+$WS_MINIMIZEBOX+$WS_MAXIMIZEBOX)
$gui_edit = _GUICtrlEdit_Create($gui, "", $ui_border_X, 100,$ui_X-$ui_border_X*2, 650,BitOR($ES_MULTILINE, $ES_READONLY,$WS_VSCROLL, $WS_BORDER))
$btn_path = GUICtrlCreateButton("...", 540, $ui_path_Y, 30,20)
$btn_start = GUICtrlCreateButton("시작", 600, $ui_path_Y, 80,50)
$ipt_path = GUICtrlCreateInput($msg_filepath, 20, $ui_path_Y, 500, 20)
$line_now = GUICtrlCreateLabel ("line : 0",20,880,100,20)
GUICtrlSetResizing($btn_path,$GUI_DOCKALL)
GUICtrlSetResizing($btn_start,$GUI_DOCKALL)
GUICtrlSetResizing($ipt_path,$GUI_DOCKALL)


$btn_log_reset = GUICtrlCreateButton("로그 초기화", 300, 60, 80,25)
Local $INFO_Checkbox = GUICtrlCreateCheckbox("INFO", 20, 60, 50, 25)
Local $WARN_Checkbox = GUICtrlCreateCheckbox("WARN", 80, 60, 50, 25)
Local $ERROR_Checkbox = GUICtrlCreateCheckbox("ERROR", 150, 60, 50, 25)
GUICtrlSetResizing($INFO_Checkbox,$GUI_DOCKALL)
GUICtrlSetResizing($WARN_Checkbox,$GUI_DOCKALL)
GUICtrlSetResizing($ERROR_Checkbox,$GUI_DOCKALL)
GUICtrlSetResizing($btn_log_reset,$GUI_DOCKALL)


GUICtrlSetState($ipt_path, $GUI_DISABLE)
GUICtrlSetState($btn_start, $GUI_DISABLE)
GUICtrlSetState( $INFO_Checkbox, $GUI_CHECKED)
GUICtrlSetState( $WARN_Checkbox, $GUI_CHECKED)
GUICtrlSetState( $ERROR_Checkbox, $GUI_CHECKED)

GUIRegisterMsg($WM_SIZE, "WM_SIZE")
GUISetState(@SW_SHOW)

Opt("TrayMenuMode", 3) ; The default tray menu items will not be shown and items are not checked when selected. These are options 1 and 2 for TrayMenuMode.
Local $tray_exit = TrayCreateItem("exit")

Global $log_day
Global $log_name
Global $set_sleep=20
Global $reset=-1
Global $readline=-1 ; 현재 읽은 라인
Global $Logarray ; 로그 배열
Global $array_num ; 로그 길이

Local $INFO[1]
Local $WARN[1]
Local $ERROR[1]
Local $log[1]

Global $filter=1
Global $type=-1
Global $check_start=-1

While 1
   $nMsg = GUIGetMsg()
   Switch $nMsg
   Case $GUI_EVENT_CLOSE
	  GUISetState(@SW_HIDE)
   Case $btn_path
	  $msg_filepath = FileOpenDialog($msg_fileopen, @WindowsDir & "\", "All (*.*)", $FD_FILEMUSTEXIST)
	  ;ConsoleWrite(@crlf&$msg_filepath)
	  GUICtrlSetData($ipt_path,$msg_filepath)
	  If $msg_filepath<>"" Then
		 GUICtrlSetState($btn_start, $GUI_ENABLE)
		 $log_name=StringSplit($msg_filepath,".")
		 $log_day=$log_name[2]
	  EndIf
   Case $btn_start
	  GUICtrlSetData($btn_start,"일시정지")
	  $check_start=1
	  If GUICtrlRead($INFO_Checkbox) = 1 Then
		 $filter=$filter*2
	  EndIf
	  If GUICtrlRead($WARN_Checkbox) = 1 Then
		 $filter=$filter*3
	  EndIf
	  If GUICtrlRead($ERROR_Checkbox) = 1 Then
		 $filter=$filter*5
	  EndIf
	  ;Local $hTimer = TimerInit()
	  $sleep_count=$set_sleep
	  $reset=1
	  While 1
		 $nMsg = GUIGetMsg() ;이벤트
		 Switch $nMsg
		 Case $GUI_EVENT_CLOSE ;닫기 메뉴
			GUISetState(@SW_HIDE)
		 Case $btn_path ; 중간에 로그 바꾸기
			;로그 일시정지
			GUICtrlSetData($btn_start,"시작")
			$check_start=-1

			$msg_filepath = FileOpenDialog($msg_fileopen, @WindowsDir & "\", "All (*.*)", $FD_FILEMUSTEXIST)
			GUICtrlSetData($ipt_path,$msg_filepath)
			If $msg_filepath<>"" Then
			   GUICtrlSetState($btn_start, $GUI_ENABLE)
			   $log_name=StringSplit($msg_filepath,".")
			   $log_day=$log_name[2]
			   $readline=-1
			   _GUICtrlEdit_SetText($gui_edit,"")
			   GUICtrlSetData($line_now,"line : 0")
			   $Logarray = FileReadToArray($msg_filepath)
			   $array_num = UBound ($Logarray)
			EndIf
		 Case $INFO_Checkbox ;정보필터링 변경
			If GUICtrlRead($INFO_Checkbox) = 1 Then
			   $filter=$filter*2
			Else
			   $filter=$filter/2
			EndIf
		 Case $WARN_Checkbox ;경고필터링 변경
			If GUICtrlRead($WARN_Checkbox) = 1 Then
			   $filter=$filter*3
			Else
			   $filter=$filter/3
			EndIf
		 Case $ERROR_Checkbox ;에러필터링 변경
			If GUICtrlRead($ERROR_Checkbox) = 1 Then
			   $filter=$filter*5
			Else
			   $filter=$filter/5
			EndIf
		 Case $btn_log_reset ;로그초기화
			$readline=-1
			_GUICtrlEdit_SetText($gui_edit,"")
			GUICtrlSetData($line_now,"line : 0")
		 Case $btn_start
			If $check_start==1 Then
			   GUICtrlSetData($btn_start,"시작")
			   $check_start=-1
			ElseIf $check_start==-1 Then
			   GUICtrlSetData($btn_start,"일시정지")
			   $check_start=1
			EndIf
		 EndSwitch
		 If $check_start==1 Then
			Sleep(50)
			$sleep_count+=1
			If $sleep_count>=$set_sleep Then
			   $sleep_count=0
			   If $Logarray=0 Then
				  ;MsgBox(0,"","")
				  $Logarray = FileReadToArray($msg_filepath)
				  ;MsgBox(0,"","")
				  $array_num = UBound ($Logarray)
			   EndIf
			EndIf

			If $readline<$array_num-1 Then
			   $i=$readline+1
			   If StringInStr($Logarray[$i],"["&$log_day) >0 Then ;로그 시작부분
				  $res = StringSplit($Logarray[$i]," ")
				  If $res[3]="INFO" Then
					 $type=2
				  ElseIf $res[3]="WARN" Then
					 $type=3
				  ElseIf $res[3]="ERROR" Then
					 $type=5
				  EndIf
				  If IsInt($filter/$type) Then
					 _GUICtrlEdit_AppendText($gui_edit,@CRLF&$Logarray[$i]&@CRLF)
				  EndIf

				  While $i+1<=$array_num-1 And StringInStr($Logarray[$i+1],"["&$log_day) <=0
					 $i+=1
					 If IsInt($filter/$type) Then
						_GUICtrlEdit_AppendText($gui_edit,$Logarray[$i]&@CRLF)
					 EndIf
				  WEnd
			   EndIf
			   $readline=$i
			   GUICtrlSetData($line_now,"line : "&$readline+1)
			Else
			   $Logarray=0
			EndIf

		 EndIf
	  WEnd
   EndSwitch
WEnd

Func WM_SIZE($hWnd, $Msg, $wParam, $lParam)
    Local $iGUIWidth = BitAND($lParam, 0xFFFF)
    Local $iGUIHeight = BitShift($lParam, 16)
    ControlMove($GUI, "", $GUI_edit, Default, Default, $iGUIWidth - 40, $iGUIHeight - 130)

    Return $GUI_RUNDEFMSG
EndFunc
