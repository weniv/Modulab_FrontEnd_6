// Google Apps Script - Google Sheets TODO Backend
// 이 파일을 Google Apps Script 편집기에 복사하세요

// 스프레드시트 설정
const SHEET_NAME = 'TODO';

// 스프레드시트 가져오기
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  // 시트가 없으면 생성
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // 헤더 추가
    sheet.appendRow(['ID', 'Text', 'Completed', 'CreatedAt', 'UpdatedAt']);
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
  }

  return sheet;
}

// GET 요청 처리 (TODO 목록 가져오기)
function doGet(e) {
  try {
    const action = e.parameter.action;

    if (action === 'getTodos') {
      return getTodos();
    }

    return createResponse('error', 'Invalid action');
  } catch (error) {
    return createResponse('error', error.toString());
  }
}

// POST 요청 처리 (TODO 추가, 수정, 삭제)
function doPost(e) {
  try {
    const action = e.parameter.action;

    if (action === 'addTodo') {
      return addTodo(e.parameter.text);
    } else if (action === 'toggleTodo') {
      return toggleTodo(e.parameter.id);
    } else if (action === 'deleteTodo') {
      return deleteTodo(e.parameter.id);
    }

    return createResponse('error', 'Invalid action');
  } catch (error) {
    return createResponse('error', error.toString());
  }
}

// TODO 목록 가져오기
function getTodos() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  // 헤더 제외
  const todos = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    todos.push({
      id: row[0],
      text: row[1],
      completed: row[2] === true || row[2] === 'TRUE',
      createdAt: row[3],
      updatedAt: row[4]
    });
  }

  // 최신순으로 정렬
  todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return createResponse('success', 'TODO 목록을 가져왔습니다.', todos);
}

// TODO 추가
function addTodo(text) {
  if (!text || text.trim() === '') {
    return createResponse('error', '할 일을 입력해주세요.');
  }

  const sheet = getSheet();
  const id = Utilities.getUuid();
  const now = new Date().toISOString();

  sheet.appendRow([id, text, false, now, now]);

  return createResponse('success', 'TODO가 추가되었습니다.', {
    id: id,
    text: text,
    completed: false,
    createdAt: now,
    updatedAt: now
  });
}

// TODO 완료/미완료 토글
function toggleTodo(id) {
  if (!id) {
    return createResponse('error', 'ID가 필요합니다.');
  }

  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  // ID로 행 찾기
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      const currentCompleted = data[i][2];
      const newCompleted = !(currentCompleted === true || currentCompleted === 'TRUE');
      const now = new Date().toISOString();

      sheet.getRange(i + 1, 3).setValue(newCompleted);
      sheet.getRange(i + 1, 5).setValue(now);

      return createResponse('success', 'TODO가 업데이트되었습니다.', {
        id: id,
        completed: newCompleted
      });
    }
  }

  return createResponse('error', 'TODO를 찾을 수 없습니다.');
}

// TODO 삭제
function deleteTodo(id) {
  if (!id) {
    return createResponse('error', 'ID가 필요합니다.');
  }

  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();

  // ID로 행 찾기
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === id) {
      sheet.deleteRow(i + 1);
      return createResponse('success', 'TODO가 삭제되었습니다.');
    }
  }

  return createResponse('error', 'TODO를 찾을 수 없습니다.');
}

// 응답 생성
function createResponse(status, message, data = null) {
  const response = {
    status: status,
    message: message
  };

  if (data !== null) {
    response.data = data;
  }

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}
