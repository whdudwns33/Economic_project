    package com.kh.project.backEnd.project.controller;

    import com.kh.project.backEnd.project.dto.MemberReqDto;
    import com.kh.project.backEnd.project.service.MemberService;
    import lombok.Getter;
    import lombok.RequiredArgsConstructor;
    import lombok.Setter;
    import lombok.ToString;
    import lombok.extern.slf4j.Slf4j;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    @Slf4j
    @RestController
    @Setter
    @Getter
    @ToString
    @RequiredArgsConstructor
    @RequestMapping("/member")
    public class MemberContoroller {
        private final MemberService memberService;

        @PostMapping("/amount")
        public ResponseEntity<Boolean> saveAmount (@RequestBody MemberReqDto memberReqDto) {
            boolean isTrue = memberService.saveAmountService(memberReqDto);
            return ResponseEntity.ok(isTrue);
        }

    }
